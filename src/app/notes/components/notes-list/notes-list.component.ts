import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { DatabaseService } from '../../../shared/services';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesListComponent implements OnInit {
  public notes!: Observable<any>;
  public subscription: Subscription = new Subscription();
  public test: any;
  public formGroup = new FormGroup({
    status: new FormControl(false)
  });

  constructor(private firestore: Firestore, private databaseService: DatabaseService) {}

  ngOnInit(): void {
    const collectionsInstance = collection(this.firestore, 'notes-list');
    this.notes = collectionData(collectionsInstance);
    this.subscription.add(this.notes.pipe(map((res: any) => res[0])).subscribe((res: any) => (this.test = res)));
  }

  public getNoteDateFromTimestamp(date: number): number {
    return new Date(date).getTime() * 1000;
  }
}
