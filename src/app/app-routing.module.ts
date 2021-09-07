import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryPageComponent } from './shop/pages/category-page/category-page.component';
import { CategoriesPageComponent } from './shop/pages/catigories-page/categories-page.component';
import { MainPageComponent } from './shop/pages/main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'categories',
    component: CategoriesPageComponent,
  },
  {
    path: 'category/:categoryId',
    component: CategoryPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
