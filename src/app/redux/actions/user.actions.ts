import { createAction, props } from '@ngrx/store';
import { IUserInfo } from '../models/user.model';

export const setUserInfo = createAction(
  '[User] Set user info',
  props<{ userInfo: IUserInfo }>(),
);

export const deleteUserInfo = createAction(
  '[User] Delete user info',
);
