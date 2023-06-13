import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculationsComponent } from './calculations';
import { MenuComponent } from './menu';
import { FoodTableComponent } from './food-table';
import { ChartsLayoutComponent } from './charts/components';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'menu' },
  { path: 'menu', component: MenuComponent },
  { path: 'calculate', component: CalculationsComponent },
  { path: 'table', component: FoodTableComponent },
  { path: 'charts', component: ChartsLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
