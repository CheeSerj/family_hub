import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, OnDestroy, DoCheck, ChangeDetectorRef } from '@angular/core';
import { collection, collectionData, deleteDoc, deleteField, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { DatabaseService } from '../../../shared/services';
import { Observable, of, Subscription } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { FormAddDataOnChart } from '../../../charts/types/form-add-data-on-chart.interfaces';
import { Notes } from '../../types/notes.interface';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesListComponent implements OnInit, OnDestroy, DoCheck {
  public selectedItem: any = null;
  public collectionsInstance = collection(this.firestore, 'notes-list');
  public notes: Observable<any> = collectionData(this.collectionsInstance);
  public subscription: Subscription = new Subscription();
  public test: any;
  public checkBoxForm!: FormGroup;
  public editForm: FormGroup = new FormGroup({
    note: new FormControl('')
  });
  public noteEdit = false;

  constructor(private firestore: Firestore, private cdr: ChangeDetectorRef) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.checkBoxForm = new FormGroup({
      notesArr: new FormArray([])
    });
    this.getTest();
  }

  /*  public getNoteDateFromTimestamp(date: number): number {
    return new Date(date).getTime() * 1000;
  }*/

  public deleteNoteByIndex(index: number) {
    this.subscription.add(
      this.notes.pipe(take(1)).subscribe((res) => {
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

  public editNoteById(item: Notes, index: number) {
    this.subscription.add(
      this.notes.pipe(take(1)).subscribe((res) => {
        const docInstance = doc(this.firestore, 'notes-list', 'Iu4y9hRJkrKRFVwAqTEN');
        const currentData = res[0].notes;
        console.log(item);
        const editData = {
          status: item.status,
          date: item.date,
          note: this.editForm.get('note')?.value
        };
        currentData.splice(index, 1, editData);
        const updateData = {
          notes: [...currentData]
        };
        console.log(docInstance, updateData);
        this.noteEdit = false;
        updateDoc(docInstance, updateData)
          .then()
          .catch((err) => {
            console.log(err);
          });
      })
    );
  }

  public test2(note: any, index: number) {
    return (this.noteEdit = true) && (this.selectedItem = index);
  }

  ngDoCheck(): void {
    this.cdr.detectChanges();
  }

  public getTest() {
    this.subscription.add(
      this.notes.pipe(map((res: any) => res[0])).subscribe((res: any) => {
        this.test = of(res.notes)
          .pipe(
            tap((res) =>
              res.forEach((note: any) => {
                const fg = new FormGroup({
                  status: new FormControl(note.status)
                });
                (this.checkBoxForm.get('notesArr') as FormArray).push(fg);
              })
            )
          )
          .subscribe((res) => {
            this.cdr.detectChanges();
            console.log(res);
          });
      })
    );
  }
}
