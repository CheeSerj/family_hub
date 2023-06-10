import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { TableModule } from 'primeng/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ChartsModule } from './charts/charts.module';
import { FoodTableModule } from './food-table/food-table.module';
import { CalculationsModule } from './calculations/calculations.module';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [AppComponent, MenuComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    TableModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FoodTableModule,
    ChartsModule,
    CalculationsModule,
    ToastModule
  ],
  providers: [MessageService, { provide: LOCALE_ID, useValue: 'Ru' }],
  bootstrap: [AppComponent]
})
export class AppModule {}
