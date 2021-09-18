import { createAction, props } from '@ngrx/store';
import { IGoodsItem } from '../models/goods.model';

export const loadGoods = createAction('[Goods] Load all goods');

export const loadGoodsSuccess = createAction(
  '[Categories] Load goods success',
  props<{ goods: Array<IGoodsItem> }>(),
);