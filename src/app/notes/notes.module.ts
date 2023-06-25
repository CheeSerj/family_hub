import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { TabViewModule } from 'primeng/tabview';
import { CheckboxModule } from 'primeng/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { TabsNotesComponent } from './widgets/tabs-notes/tabs-notes.component';
import { SkeletonModule } from 'primeng/skeleton';
import { ModalAddDataForNotesComponent } from './components/modal-add-data-for-notes/modal-add-data-for-notes.component';

@NgModule({
  declarations: [NotesComponent, NotesListComponent, ShoppingListComponent, AppointmentComponent, TabsNotesComponent, ModalAddDataForNotesComponent],
  imports: [CommonModule, MatToolbarModule, ButtonModule, RouterModule, TabViewModule, CheckboxModule, ReactiveFormsModule, CardModule, SkeletonModule]
})
export class NotesModule {}
