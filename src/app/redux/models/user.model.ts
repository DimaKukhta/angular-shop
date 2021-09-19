export interface IUserInfo {
  cart: Array<string>;
  favorites: Array<string>;
  firstName: string;
  lastName: string;
  orders: Array<any>;
}

export interface IUserState {
  userInfo: IUserInfo | {};
}
