import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ShopService } from 'src/app/shop/services/shop.service';
import { loadGoodsItemSuccess, loadGoodsSuccess } from '../actions/goods.actions';

@Injectable()
export class GoodsEffects {
  loadGoods$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Goods] Load all goods'),
      mergeMap((action: any) =>
        this.shop.getGoods(action.categoryId, action.subCategoryId, action.startPosition).pipe(
          map((goods) => loadGoodsSuccess({ goods })),
          catchError(() => EMPTY),
        ),
      ),
    ),
  );

  loadGoodsItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Goods] Load goods item'),
      mergeMap((action: any) =>
        this.shop.getGoodsItem(action.goodsItemId).pipe(
          map((currentGoodsItem) => loadGoodsItemSuccess({ currentGoodsItem })),
          catchError(() => EMPTY),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions, private shop: ShopService) {}
}
