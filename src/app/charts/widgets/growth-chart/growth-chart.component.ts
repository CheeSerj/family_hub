import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-growth-chart',
  templateUrl: './growth-chart.component.html',
  styleUrls: ['./growth-chart.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrowthChartComponent implements OnInit {
  public multiAxisData: any;
  public multiAxisOptions: any;

  ngOnInit(): void {
    this.multiAxisData = {
      labels: ['Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь', 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август'],
      datasets: [
        {
          label: 'Рост',
          backgroundColor: '#f0faf4',
          order: 1,
          yAxisID: 'y1',
          data: [49, 50, 54, 59, 59.5, 63, 65, 67, 67, 69],
          hoverBackgroundColor: '#91d2cc'
        }
      ]
    };

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
