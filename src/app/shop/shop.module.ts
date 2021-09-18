import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CategoriesPageComponent } from './pages/catigories-page/categories-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesMenuComponent } from './components/categories-menu/categories-menu.component';
import { SharedModule } from '../shared/shared.module';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { GoodsItemComponent } from './components/goods-item/goods-item.component';
import { GoodsItemPageComponent } from './pages/goods-item-page/goods-item-page.component';



@NgModule({
  declarations: [
    MainPageComponent,
    CategoriesPageComponent,
    CategoriesMenuComponent,
    CategoryPageComponent,
    GoodsItemComponent,
    GoodsItemPageComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
  ],
  exports: [
    MainPageComponent,
  ],
})
export class ShopModule { }
