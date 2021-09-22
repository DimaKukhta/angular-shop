import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { setUserInfo } from 'src/app/redux/actions/user.actions';
import { selectUserCart, selectUserFavorite } from 'src/app/redux/selectors/user.selector';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
    private warning: MatSnackBar,
    private store: Store,
  ) {
    this.cartItems$
      .pipe(
        tap((items) => {
          this.cartItems = items;
        }),
      )
      .subscribe();

    this.favoriteItems$
      .pipe(
        tap((items) => {
          this.favoriteItems = items;
        }),
      )
      .subscribe();

  }

  public cartItems$ = this.store.select(selectUserCart);

  public favoriteItems$ = this.store.select(selectUserFavorite);

  public cartItems: Array<string> = [];

  public favoriteItems: Array<string> = [];

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

  public deleteFromFavorites(id: string): void {
    this.http.delete(`users/favorites?id=${id}`)
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

  public addGoodsItemtoCart(itemId: string): void {
    this.http.post('users/cart', { id: itemId })
      .pipe(
        tap(() => {
          this.getWarning('Товар добавлен в корзину!');
          this.getUserInfo();
        }),
        catchError((err) => {
          this.getWarning('Ошибка!');
          throw new Error(err);
        }),
      )
      .subscribe();
  }

  public addGoodsItemtoFavorites(itemId: string): void {
    this.http.post('users/favorites', { id: itemId })
      .pipe(
        tap(() => {
          this.getWarning('Товар добавлен в избранное!');
          this.getUserInfo();
        }),
        catchError((err) => {
          this.getWarning('Ошибка!');
          throw new Error(err);
        }),
      )
      .subscribe();
  }

  public isInCart(id: string) {
    return this.cartItems.includes(id);
  }

  public isInFavorite(id: string) {
    return this.favoriteItems.includes(id);
  }
}
