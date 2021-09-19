import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CartItemComponent,
    CartPageComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
  ],
})
export class UserModule { }
