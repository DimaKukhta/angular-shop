import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss'],
})
export class CategoryPageComponent implements OnInit {
  constructor(public route: ActivatedRoute, private shop: ShopService) {}

  private params!: any;

  public goods$!: Observable<any>;

  ngOnInit(): void {
    this.route.params
      .pipe(
        tap((params) => {
          this.params = params;
        })
      )
      .subscribe();

    this.goods$ = this.shop.getGoods(this.params.categoryId, this.params.subCategoryId);
  }
}
