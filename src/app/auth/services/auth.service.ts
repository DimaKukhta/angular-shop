import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { removeToken, setToken } from 'src/app/redux/actions/auth.actions';
import { deleteUserInfo } from 'src/app/redux/actions/user.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    public http: HttpClient,
    public router: Router,
    private store: Store,
    private warning: MatSnackBar,
  ) {}

  private getWarning(text: string): void {
    this.warning.open(text, 'OK', { duration: 5000 });
  }

  public login(login: string, password: string): void {
    const user = {
      login,
      password,
    };
    this.http
      .post('users/login', user)
      .pipe(
        tap((response: any) => {
          localStorage.setItem('token', response.token);
          this.store.dispatch(setToken({ token: response.token }));
          this.router.navigate(['']);
          this.getWarning('Вы вошли в аккаунт');
        }),
        catchError(() => {
          this.getWarning('Неверный логин или пароль');
          return of([]);
        }),
      )
      .subscribe();
  }

  public createAccount(
    firstName: string,
    lastName: string,
    login: string,
    password: string,
  ): void {
    const user = {
      firstName,
      lastName,
      login,
      password,
    };
    this.http
      .post('users/register', user)
      .pipe(
        tap((response: any) => {
          localStorage.setItem('token', response.token);
          this.store.dispatch(setToken(response.token));
          this.getWarning('Аккаунт успешно создан!');
          this.router.navigate(['']);
        }),
        catchError(() => {
          this.getWarning('Неверные данные, попробуйте снова');
          return of([]);
        }),
      )
      .subscribe();
  }

  public getToken(): string {
    const token = localStorage.getItem('token');
    if (token) {
      return token;
    } 
    return '';
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.store.dispatch(deleteUserInfo());
    this.store.dispatch(removeToken());
    this.router.navigate(['auth', 'login']);
  }
}
