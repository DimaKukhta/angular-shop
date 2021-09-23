import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import { IAuthState } from '../models/auth.model';

export const initialState: IAuthState = {
  token: '',
};

const reducer = createReducer(
  initialState,
  on(AuthActions.setToken, (state, { token }) => ({ ...state, token })),
  on(AuthActions.removeToken, () => ({ token: '' })),
);

export function authReducer(state: IAuthState | undefined, action: Action) {
  return reducer(state, action);
}
