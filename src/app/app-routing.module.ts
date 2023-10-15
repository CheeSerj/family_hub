import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculationsComponent } from './calculations';
import { MenuComponent } from './menu';
import { FoodTableComponent } from './food-table';
import { ChartsLayoutComponent } from './charts/components';
import { NotesComponent } from './notes';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegisterComponent } from './auth/pages/register/register.component';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'menu' },
  /*  {path: '', pathMatch: 'full', redirectTo:'login'},*/
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'calculate', component: CalculationsComponent },
  { path: 'table', component: FoodTableComponent },
  { path: 'charts', component: ChartsLayoutComponent },
  { path: 'notes', component: NotesComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
