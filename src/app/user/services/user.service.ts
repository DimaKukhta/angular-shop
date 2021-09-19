import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { setUserInfo } from 'src/app/redux/actions/user.actions';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
    private warning: MatSnackBar,
    private store: Store,
  ) {}

  private getWarning(text: string): void {
    this.warning.open(text, 'OK', { duration: 5000 });
  }

  public getUserInfo(): void {
    this.http
      .get('users/userInfo')
      .pipe(
        tap((response: any) => {
          if (response) {
            this.store.dispatch(setUserInfo({ userInfo: response }));
          }
        }),
        catchError((err) => {
          this.getWarning('Ошибка авторизации' + err);
          return of([]);
        }),
      )
      .subscribe();
  }

  public deleteFromCart(id: string): void {
    this.http.delete(`users/cart?id=${id}`)
      .pipe(
        tap(() => {
          this.getWarning('Товар успешно удалён');
          this.getUserInfo();
        }),
        catchError((err) => {
          this.getWarning('Ошибка!');
          throw new Error(err);
        }),
      )
      .subscribe();
  }
}
