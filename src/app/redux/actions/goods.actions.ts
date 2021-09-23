import { createAction, props } from '@ngrx/store';
import { IGoodsItem } from '../models/goods.model';

export const loadGoods = createAction('[Goods] Load all goods', props<{ categoryId: string, subCategoryId: string }>());

export const loadGoodsItem = createAction('[Goods] Load goods item', props<{ goodsItemId: string }>());

export const loadGoodsSuccess = createAction(
  '[Categories] Load goods success',
  props<{ goods: Array<IGoodsItem> }>(),
);

export const loadGoodsItemSuccess = createAction(
  '[Categories] Load goods success',
  props<{ currentGoodsItem: IGoodsItem }>(),
);