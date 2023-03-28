import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalculationsComponent} from "./calculations/calculations.component";

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
