import { createAction, props } from '@ngrx/store';
import { ICategoryResponse } from '../models/categories.model';

export const loadCategories = createAction('[Categories] Load all categories');

export const loadCategoriesSuccess = createAction(
  '[Categories] Load categories success',
  props<{ categories: Array<ICategoryResponse> }>(),
);

export const setCurrentCategory = createAction('[Categories] Set current category', props<{ category: ICategoryResponse }>());