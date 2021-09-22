import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
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

  public getGoods(categoryId: string, subCategoryId: string, startPosition: number): Observable<any> {
    return this.http.get(`goods/category/${categoryId}/${subCategoryId}?start=${startPosition}&count=10`);
  }

  public getGoodsItem(goodsItemId: string): Observable<any> {
    return this.http.get(`goods/item/${goodsItemId}`);
  }
}
