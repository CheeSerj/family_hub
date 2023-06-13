export interface BarChart {
  labels: string[];
  datasets: Datasets[];
}

export interface Datasets {
  label: string;
  backgroundColor: string;
  order: number;
  yAxisID: string;
  data: number[];
  hoverBackgroundColor: string;
}

export interface ChartDataFromBD {
  data: number[];
  labels: string[];
}
