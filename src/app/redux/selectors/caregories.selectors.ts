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

export const selectCurrentCategory = createSelector(
  selectCategoriesState,
  (state: any) => state.currentCategory,
);

export const selectSubCategories = createSelector(
  selectAllCaregories,
  selectCurrentCategory,
  (categories: any, currentCategory: any) => categories.find((element: any) => element.name === currentCategory.name).subCategories,
);