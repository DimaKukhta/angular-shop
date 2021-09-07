import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CategoriesPageComponent } from './pages/catigories-page/categories-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesMenuComponent } from './components/categories-menu/categories-menu.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MainPageComponent,
    CategoriesPageComponent,
    CategoriesMenuComponent,
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
