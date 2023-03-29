import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalculationsComponent} from "./calculations/calculations.component";
import {MenuComponent} from "./menu/menu.component";
import {FoodTableComponent} from "./food-table/food-table.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'menu'},
  {path: 'menu', component: MenuComponent},
  {path: 'calculate', component: CalculationsComponent},
  {path: 'table', component: FoodTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
