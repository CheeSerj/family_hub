import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu';
import { TableModule } from 'primeng/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ChartsModule } from './charts';
import { FoodTableModule } from './food-table';
import { CalculationsModule } from './calculations';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { NotificationService } from './shared/services';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { TabbarModule } from './tabbar/tabbar.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';

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
    ToastModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    TabbarModule,
    AuthModule
  ],
  providers: [
    MessageService,
    { provide: LOCALE_ID, useValue: 'Ru' },
    {
      provide: APP_INITIALIZER,
      useFactory: (notifyService: NotificationService) => () => {
        notifyService.dateCheckForNotify();
      },
      deps: [NotificationService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
