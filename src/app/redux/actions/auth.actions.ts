import { createAction, props } from '@ngrx/store';

export const setToken = createAction(
  '[Auth] Set token',
  props<{ token: string }>(),
);

export const removeToken = createAction(
  '[Auth] Remove token',
);