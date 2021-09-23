import { createFeatureSelector, createSelector } from '@ngrx/store';

const selectUserState = createFeatureSelector('user');

export const selectUserCart = createSelector(
  selectUserState,
  (state: any) => state.userInfo.cart ? state.userInfo.cart : [],
);

export const selectUserFavorite = createSelector(
  selectUserState,
  (state: any) => state.userInfo.favorites ? state.userInfo.favorites : [],
);

export const selectCurrentUser = createSelector(
  selectUserState,
  (state: any) => state.userInfo,
);
