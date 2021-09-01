import { Action, createReducer, on } from '@ngrx/store';
import { ISettingsState } from '../models/settings.models';
import * as SettingsActions from '../actions/settings.actions';

export const initialState: ISettingsState = {
  countryName: 'Минск',
};

const reducer = createReducer(
  initialState,
  on(SettingsActions.setCountry, (state, { countryName }) => ({
    countryName,
  })),
);

export function settingsReducer(state: ISettingsState | undefined, action: Action) {
  return reducer(state, action);
}
