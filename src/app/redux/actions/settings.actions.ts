import { createAction, props } from '@ngrx/store';

export const setCountry = createAction(
  '[Settings] Set Country',
  props<{ countryName: string }>(),
);
