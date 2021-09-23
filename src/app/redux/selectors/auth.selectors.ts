import { createFeatureSelector, createSelector } from '@ngrx/store';

const selectAuthState = createFeatureSelector('auth');

export const selectAuthToken = createSelector(
  selectAuthState,
  (state: any) => state.token,
);
