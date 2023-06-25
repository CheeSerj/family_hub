import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ModalAddDataForChartsComponent } from '../charts/components';
import { take } from 'rxjs/operators';
import { FormAddDataOnChart } from '../charts/types/form-add-data-on-chart.interfaces';
import { DialogService } from 'primeng/dynamicdialog';
import { Firestore } from '@angular/fire/firestore';
import { ModalAddDataForNotesComponent } from './components/modal-add-data-for-notes/modal-add-data-for-notes.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DialogService]
})
export class NotesComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    document.body.style.background = '#ffffff';
  }

  ngOnInit(): void {
    document.body.style.background = 'var(--indigo-200)';
  }

  constructor(public dialogService: DialogService, private firestore: Firestore) {}

  public openDialogForAddData(): void {
    this.dialogService
      .open(ModalAddDataForNotesComponent, {
        width: '310px',
        height: '340px',
        showHeader: false,
        contentStyle: { padding: '1rem', overflowY: 'hidden', borderRadius: '10px', background: 'var(--indigo-200)' },
        baseZIndex: 10000
      })
      .onClose.pipe(take(1))
      .subscribe();
  }
}
