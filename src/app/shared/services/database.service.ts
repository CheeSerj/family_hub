import { Injectable } from '@angular/core';
import { BarChart, ChartDataFromBD } from '../../charts/types';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  public parseDataForChart(arr: ChartDataFromBD[], title: string): BarChart {
    const chartsData: BarChart[] = arr.map((res: ChartDataFromBD) => ({
      labels: res.labels,
      datasets: [
        {
          label: title,
          backgroundColor: '#f0faf4',
          order: 1,
          yAxisID: 'y1',
          data: res.data,
          hoverBackgroundColor: '#91d2cc'
        }
      ]
    }));
    return chartsData[0];
  }
}
