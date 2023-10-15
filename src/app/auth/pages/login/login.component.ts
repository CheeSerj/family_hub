import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  @Input() public register = false;
  public loginForm!: FormGroup;
  value!: string;

  public translateLabelPassword = {
    weakLabel: 'Простой',
    mediumLabel: 'Средний',
    strongLabel: 'Сложный'
  };

  constructor(private router: Router, private authService: AuthService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    console.log('123123123');
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
    localStorage.getItem('token') ? this.router.navigate(['menu']).catch() : false;
  }

  public submitForm(): void {
    if (this.loginForm.invalid) {
      this.loginForm.get('email')?.markAsDirty({ onlySelf: true });
      this.loginForm.get('password')?.markAsDirty({ onlySelf: true });
      return;
    }

    if (this.register) {
      this.authService.setToken(this.loginForm.value as { email: string; password: string });
      this.router.navigate(['login']).catch();
      this.register = false;
      this.cdr.detectChanges();
      return;
    }

    this.authService.setToken(this.loginForm.value as { email: string; password: string });
    this.router.navigate(['menu']).catch();
  }

  public get titleForCard(): string {
    return this.register ? 'Регистрация' : 'Вход';
  }

  public get titleForButton(): string {
    return this.register ? 'Зарегистрироваться' : 'Войти';
  }
}
