import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, OnDestroy, DoCheck, ChangeDetectorRef } from '@angular/core';
import { collection, collectionData, deleteDoc, deleteField, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { DatabaseService } from '../../../shared/services';
import { Observable, of, Subscription } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { FormAddDataOnChart } from '../../../charts/types/form-add-data-on-chart.interfaces';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesListComponent implements OnInit, OnDestroy {
  public notes!: Observable<any>;
  public subscription: Subscription = new Subscription();
  public test: any;
  public formGroup!: FormGroup;
  public updateDataChart!: Observable<any>;

  constructor(private firestore: Firestore) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      notesArr: new FormArray([])
    });
    const collectionsInstance = collection(this.firestore, 'notes-list');
    this.notes = collectionData(collectionsInstance);
    this.subscription.add(
      this.notes.pipe(map((res: any) => res[0])).subscribe((res: any) => {
        this.test = of(res.notes)
          .pipe(
            tap((res) =>
              res.forEach((note: any) => {
                const fg = new FormGroup({
                  status: new FormControl(note.status)
                });
                (this.formGroup.get('notesArr') as FormArray).push(fg);
              })
            )
          )
          .subscribe((res) => console.log(res));
      })
    );
  }

  /*  public getNoteDateFromTimestamp(date: number): number {
    return new Date(date).getTime() * 1000;
  }*/

  public deleteNoteByIndex(index: number) {
    const collectionsInstance = collection(this.firestore, 'notes-list');
    this.updateDataChart = collectionData(collectionsInstance);
    this.subscription.add(
      this.updateDataChart.pipe(take(1)).subscribe((res) => {
        const docInstance = doc(this.firestore, 'notes-list', 'Iu4y9hRJkrKRFVwAqTEN');
        const currentData = res[0].notes;
        currentData.splice(index, 1);
        const updateData = {
          notes: [...currentData]
        };
        updateDoc(docInstance, updateData)
          .then()
          .catch((err) => {
            console.log(err);
          });
      })
    );
  }
}
