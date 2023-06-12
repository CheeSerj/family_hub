import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { BarChart, ChartDataFromBD } from '../../types/charts.interfaces';
import { Observable, Subscription } from 'rxjs';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { DatabaseService } from '../../../shared/services/database.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-growth-chart',
  templateUrl: './growth-chart.component.html',
  styleUrls: ['./growth-chart.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrowthChartComponent implements OnInit {
  public multiAxisData!: BarChart;
  public multiAxisOptions: any;
  public chartGrowthAxisData!: Observable<any>;
  public subscription: Subscription = new Subscription();

  constructor(private firestore: Firestore, private databaseService: DatabaseService) {}

  ngOnInit(): void {
    const collectionsInstance = collection(this.firestore, 'growth-chart');
    this.chartGrowthAxisData = collectionData(collectionsInstance);
    this.subscription.add(
      this.chartGrowthAxisData
        .pipe(map((res: ChartDataFromBD[]) => this.databaseService.parseDataForChart(res, 'Рост')))
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
}
