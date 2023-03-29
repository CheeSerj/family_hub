import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculationsComponent } from './calculations/calculations.component';
import {CalendarModule} from "primeng/calendar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { FoodTableComponent } from './food-table/food-table.component';
import {TableModule} from "primeng/table";

@NgModule({
  declarations: [
    AppComponent,
    CalculationsComponent,
    MenuComponent,
    FoodTableComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CalendarModule,
        FormsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        TableModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
