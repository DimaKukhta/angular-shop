import { createFeatureSelector, createSelector } from '@ngrx/store';

const selectSettingsState = createFeatureSelector('settings');

export const selectCountry = createSelector(
  selectSettingsState,
  (state: any) => state.countryName,
);
