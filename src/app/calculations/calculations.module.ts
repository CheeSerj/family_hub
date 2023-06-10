import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculationsComponent } from './calculations.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CalculateTimerComponent } from './widgets/calculate-timer/calculate-timer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CalculationsComponent, CalculateTimerComponent],
  imports: [CommonModule, MatToolbarModule, ButtonModule, ReactiveFormsModule, RouterModule]
})
export class CalculationsModule {}
