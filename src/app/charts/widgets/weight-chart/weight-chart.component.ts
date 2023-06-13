import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DatabaseService } from '../../../shared/services';
import { BarChart, ChartDataFromBD } from '../../types';

@Component({
  selector: 'app-weight-chart',
  templateUrl: './weight-chart.component.html',
  styleUrls: ['./weight-chart.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeightChartComponent implements OnInit, OnDestroy {
  public multiAxisData!: BarChart;
  public multiAxisOptions: any;
  public chartWeightAxisData!: Observable<any>;
  public subscription: Subscription = new Subscription();

  constructor(private firestore: Firestore, private databaseService: DatabaseService) {}

  public ngOnInit(): void {
    const collectionsInstance = collection(this.firestore, 'weight-chart');
    this.chartWeightAxisData = collectionData(collectionsInstance);
    this.subscription.add(
      this.chartWeightAxisData
        .pipe(map((res: ChartDataFromBD[]) => this.databaseService.parseDataForChart(res, 'Вес')))
        .subscribe((res) => (this.multiAxisData = res))
    );

    this.multiAxisOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        },
        tooltips: {
          mode: 'index',
          intersect: true
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        },
        y: {
          type: 'linear',
          display: false,
          position: 'left',
          ticks: {
            min: 0,
            max: 100,
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          grid: {
            drawOnChartArea: false,
            color: '#ebedef'
          },
          ticks: {
            min: 0,
            max: 100,
            color: '#495057'
          }
        }
      }
    };
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
