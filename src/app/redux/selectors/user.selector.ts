import { createFeatureSelector, createSelector } from '@ngrx/store';

const selectUserState = createFeatureSelector('user');

export const selectUserCart = createSelector(
  selectUserState,
  (state: any) => state.userInfo.cart ? state.userInfo.cart : [],
);
