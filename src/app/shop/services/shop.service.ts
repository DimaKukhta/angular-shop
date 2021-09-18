import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategoryResponse } from 'src/app/redux/models/categories.model';

@Injectable({
  providedIn: 'root',
})
export class ShopService {

  constructor(private http: HttpClient) { }

  public getCategories(): Observable<any> {
    return this.http.get<ICategoryResponse>('categories');
  }

  public getGoods(categoryId: string, subCategoryId: string): Observable<any> {
    return this.http.get(`goods/category/${categoryId}/${subCategoryId}`);
  }
}
