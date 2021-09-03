export interface ICategoryResponse {
  id: string;
  name: string;
  subCategories: Array<ISubCategory>;
}

export interface ICategoriesState {
  categories: Array<ICategoryResponse>;
}

export interface ISubCategory{
  id: string;
  name: string;
}
