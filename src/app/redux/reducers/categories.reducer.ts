import { Action, createReducer, on } from '@ngrx/store';
import * as CategoriesActions from '../actions/catigories.actions';
import { ICategoriesState } from '../models/categories.model';

export const initialState: ICategoriesState = {
  categories: [
    {
      id: 'appliances',
      name: 'Бытовая техника',
      subCategories: [],
    },
    {
      id: 'electronics',
      name: 'Электроника',
      subCategories: [],
    },
    {
      id: 'computers-peripherals',
      name: 'Компьютеры и периферия',
      subCategories: [],
    },
    {
      id: 'furniture',
      name: 'Мебель',
      subCategories: [],
    },
    {
      id: 'hobbies',
      name: 'Досуг и хобби',
      subCategories: [],
    },
  ],
};

const reducer = createReducer(
  initialState,
  on(CategoriesActions.loadCategories, (state) => state),
  on(CategoriesActions.loadCategoriesSuccess, (state, { categories }) => ({ ...state, categories })),
);

export function categoriesReducer(
  state: ICategoriesState | undefined,
  action: Action,
) {
  return reducer(state, action);
}
