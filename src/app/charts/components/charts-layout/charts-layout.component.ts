import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { take } from 'rxjs/operators';
import { ModalAddDataForChartsComponent } from '../modal-add-data-for-charts/modal-add-data-for-charts.component';

@Component({
  selector: 'app-charts-layout',
  templateUrl: './charts-layout.component.html',
  styleUrls: ['./charts-layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DialogService]
})
export class ChartsLayoutComponent implements OnInit, OnDestroy {
  public switchCalendar = true;
  public dialog!: DynamicDialogRef;

  ngOnDestroy(): void {
    document.body.style.background = '#ffffff';
  }

  ngOnInit(): void {
    document.body.style.background = 'var(--teal-100)';
  }

  constructor(public dialogService: DialogService) {}

  public openDialogForAddData(): void {
    this.dialogService
      .open(ModalAddDataForChartsComponent, {
        width: '310px',
        height: '340px',
        showHeader: false,
        contentStyle: { padding: '1rem', overflowY: 'auto', borderRadius: '10px', background: '' },
        baseZIndex: 10000
      })
      .onClose.subscribe((res) => console.log(res));
  }
}
