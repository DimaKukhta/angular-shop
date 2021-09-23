import { Action, createReducer, on } from '@ngrx/store';
import * as GoodsActions from '../actions/goods.actions';
import { IGoodsState } from '../models/goods.model';

export const initialState: IGoodsState = {
  goods: [],
  currentGoodsItem: {},
};

const reducer = createReducer(
  initialState,
  on(GoodsActions.loadGoods, (state) => state),
  on(GoodsActions.loadGoodsItem, (state) => state),
  on(GoodsActions.loadGoodsSuccess, (state, { goods }) => ({ ...state, goods })),
  on(GoodsActions.loadGoodsItemSuccess, (state, { currentGoodsItem }) => ({ ...state, currentGoodsItem })),
);

export function goodsReducer(state: IGoodsState | undefined, action: Action) {
  return reducer(state, action);
}
