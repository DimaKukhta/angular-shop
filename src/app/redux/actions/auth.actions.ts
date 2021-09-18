import { createAction, props } from '@ngrx/store';

export const setToken = createAction(
  '[Auth] Set token',
  props<{ token: string }>(),
);
