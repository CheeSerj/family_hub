import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NotesComponent],
  imports: [CommonModule, MatToolbarModule, ButtonModule, RouterModule]
})
export class NotesModule {}
