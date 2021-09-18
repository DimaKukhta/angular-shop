import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ICategoryResponse } from 'src/app/redux/models/categories.model';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private http: HttpClient, private warning: MatSnackBar) {}

  private getWarning(text: string): void {
    this.warning.open(text, 'OK', { duration: 5000 });
  }

  public getCategories(): Observable<any> {
    return this.http.get<ICategoryResponse>('categories');
  }

  public getGoods(categoryId: string, subCategoryId: string): Observable<any> {
    return this.http.get(`goods/category/${categoryId}/${subCategoryId}`);
  }

  public getGoodsItem(goodsItemId: string): Observable<any> {
    return this.http.get(`goods/item/${goodsItemId}`);
  }

  public addGoodsItemtoCart(itemId: string): void {
    this.http.post('users/cart', { id: itemId })
      .pipe(
        tap(() => {
          this.getWarning('Товар добавлен в корзину!');
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
        }),
        catchError((err) => {
          this.getWarning('Ошибка!');
          throw new Error(err);
        }),
      )
      .subscribe();
  }
}
