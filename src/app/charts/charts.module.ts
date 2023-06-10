import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsLayoutComponent } from './components';
import { GrowthChartComponent } from './widgets';
import { WeightChartComponent } from './widgets';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { ChartModule } from 'primeng/chart';
import { CalendarLeapsInEvolutionsComponent } from './widgets/calendar-leaps-in-evolutions/calendar-leaps-in-evolutions.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';

@NgModule({
  declarations: [ChartsLayoutComponent, GrowthChartComponent, WeightChartComponent, CalendarLeapsInEvolutionsComponent],
  imports: [CommonModule, MatToolbarModule, ButtonModule, RouterModule, ChartModule, CalendarModule, FormsModule, InputSwitchModule]
})
export class ChartsModule {}
