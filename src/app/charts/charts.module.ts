import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsLayoutComponent } from './components';
import { GrowthChartComponent } from './widgets';
import { WeightChartComponent } from './widgets';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { ChartModule } from 'primeng/chart';
import { CalendarLeapsInEvolutionsComponent } from './widgets';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ModalAddDataForChartsComponent } from './components';

@NgModule({
  declarations: [ChartsLayoutComponent, GrowthChartComponent, WeightChartComponent, CalendarLeapsInEvolutionsComponent, ModalAddDataForChartsComponent],
  imports: [CommonModule, MatToolbarModule, ButtonModule, RouterModule, ChartModule, CalendarModule, FormsModule, InputSwitchModule]
})
export class ChartsModule {}
