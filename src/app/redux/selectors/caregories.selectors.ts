import { createFeatureSelector, createSelector } from '@ngrx/store';

const selectCategoriesState = createFeatureSelector('categories');

export const selectAllCaregories = createSelector(
  selectCategoriesState,
  (state: any) => state.categories,
);

export const selectCategoriesNames = createSelector(
  selectAllCaregories,
  (categories: any) => 
    categories.map((category: any) => {
      const { id, name } = category;
      return { id, name };
    }),
);
