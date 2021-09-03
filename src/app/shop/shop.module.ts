import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CategoriesPageComponent } from './pages/catigories-page/categories-page.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    MainPageComponent,
    CategoriesPageComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    MainPageComponent,
  ],
})
export class ShopModule { }
