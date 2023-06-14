import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { take } from 'rxjs/operators';
import { ModalAddDataForChartsComponent } from '../modal-add-data-for-charts/modal-add-data-for-charts.component';
import { collection, collectionData, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { FormAddDataOnChart } from '../../types/form-add-data-on-chart.interfaces';

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
  public updateDataChart!: Observable<any>;
  public subscription: Subscription = new Subscription();

  ngOnDestroy(): void {
    document.body.style.background = '#ffffff';
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    document.body.style.background = 'var(--teal-100)';
  }

  constructor(public dialogService: DialogService, private firestore: Firestore) {}

  public openDialogForAddData(): void {
    this.dialogService
      .open(ModalAddDataForChartsComponent, {
        width: '310px',
        height: '340px',
        showHeader: false,
        contentStyle: { padding: '1rem', overflowY: 'hidden', borderRadius: '10px', background: '#c2e6e2' },
        baseZIndex: 10000
      })
      .onClose.pipe(take(1))
      .subscribe((res: FormAddDataOnChart) => {
        this.addDataInChart(res);
      });
  }

  public addDataInChart(data: FormAddDataOnChart) {
    const collectionsInstance = collection(this.firestore, data.chart);
    this.updateDataChart = collectionData(collectionsInstance);
    this.subscription.add(
      this.updateDataChart.pipe(take(1)).subscribe((res) => {
        const docInstance = doc(this.firestore, data.chart, data.id);
        const updateData = {
          data: [...res[0].data, data.params],
          labels: [...res[0].labels, data.month]
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
