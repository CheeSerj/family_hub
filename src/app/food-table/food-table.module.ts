import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodTableComponent } from './food-table.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ProportionTableComponent } from './widgets';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FoodTableComponent, ProportionTableComponent],
  imports: [CommonModule, MatToolbarModule, TableModule, ButtonModule, RouterModule]
})
export class FoodTableModule {}
