import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { loadGoods } from 'src/app/redux/actions/goods.actions';
import { selectAllGoods } from 'src/app/redux/selectors/goods.selectors';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss'],
})
export class CategoryPageComponent implements OnInit {
  constructor(
    public route: ActivatedRoute,
    private shop: ShopService,
    private store: Store,
  ) {}

  private params!: any;

  public goods$: Observable<any> = this.store.select(selectAllGoods);

  public startPosition = 0;

  public loadPreviosGoods(): void {
    this.startPosition -= 10;
    this.store.dispatch(
      loadGoods({
        categoryId: this.params.categoryId,
        subCategoryId: this.params.subCategoryId,
        startPosition: this.startPosition,
      }),
    );
  }

  public loadNextGoods(): void {
    this.startPosition += 10;
    this.store.dispatch(
      loadGoods({
        categoryId: this.params.categoryId,
        subCategoryId: this.params.subCategoryId,
        startPosition: this.startPosition,
      }),
    );
  }

  ngOnInit(): void {
    this.route.params
      .pipe(
        tap((params) => {
          this.params = params;
        }),
      )
      .subscribe();
    this.store.dispatch(
      loadGoods({
        categoryId: this.params.categoryId,
        subCategoryId: this.params.subCategoryId,
        startPosition: this.startPosition,
      }),
    );
  }
}
