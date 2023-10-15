import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}

  public setToken(token: { email: string; password: string }) {
    localStorage.setItem('token', JSON.stringify(token));
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  public get isLoggedIn() {
    return this.getToken()! == null;
  }

  public login(user: { email: string; password: string }): Observable<string | boolean> {
    if (user.email === 'admin' && user.password === 'admin') {
      /* this.setToken('admin')*/
      return of(true);
    }
    return throwError(() => new Error('Ошибка логина'));
  }

  public logout() {
    localStorage.clear();
  }
}
