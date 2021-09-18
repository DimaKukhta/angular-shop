import { createFeatureSelector, createSelector } from '@ngrx/store';

const selectGoodsState = createFeatureSelector('goods');

export const selectAllGoods = createSelector(
  selectGoodsState,
  (state: any) => state.goods,
);

export const selectCurrentGoodsItem = createSelector(
  selectGoodsState,
  (state: any) => state.currentGoodsItem,
);
