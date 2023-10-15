import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DividerModule } from 'primeng/divider';
import { PasswordModule } from 'primeng/password';
import { InputMaskModule } from 'primeng/inputmask';
import { AuthRoutingModule } from './auth-routing.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [LoginComponent, AuthFormComponent, RegisterComponent],
  imports: [CommonModule, ReactiveFormsModule, DividerModule, PasswordModule, InputMaskModule, ButtonModule, InputTextModule, FormsModule]
})
export class AuthModule {}
