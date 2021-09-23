import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import { IUserState } from '../models/user.model';

export const initialState: IUserState = {
  userInfo: {},
};

const reducer = createReducer(
  initialState,
  on(UserActions.setUserInfo, (state, { userInfo }) => ({
    ...state,
    userInfo,
  })),
  on(UserActions.deleteUserInfo, () => ({ userInfo: {} })),
);

export function userReducer(state: IUserState | undefined, action: Action) {
  return reducer(state, action);
}
