import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ISettingsState } from '../models/settings.models';

const selectSettingsState = createFeatureSelector('settings');

export const selectCountry = createSelector(
  selectSettingsState,
  (state: any) => state.countryName,
);
