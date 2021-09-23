import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ShopService } from 'src/app/shop/services/shop.service';
import { loadCategoriesSuccess } from '../actions/catigories.actions';

@Injectable()
export class CategoriesEffects {
  loadCards$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Categories] Load all categories'),
      mergeMap(() =>
        this.shop.getCategories().pipe(
          map((categories) => loadCategoriesSuccess({ categories })),
          catchError(() => EMPTY),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions, private shop: ShopService) {}
}
