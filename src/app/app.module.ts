import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { settingsReducer } from './redux/reducers/settings.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ShopInterceptor } from './shop/utils/shop.interceptor';
import { categoriesReducer } from './redux/reducers/categories.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CategoriesEffects } from './redux/effects/categories.effects';
import { ShopModule } from './shop/shop.module';
import { GoodsEffects } from './redux/effects/goods.effects';
import { goodsReducer } from './redux/reducers/goods.reducer';
import { authReducer } from './redux/reducers/auth.reducer';
import { userReducer } from './redux/reducers/user.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      settings: settingsReducer,
      categories: categoriesReducer,
      goods: goodsReducer,
      auth: authReducer,
      user: userReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
    EffectsModule.forRoot([CategoriesEffects, GoodsEffects]),
    HttpClientModule,
    ShopModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: ShopInterceptor,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
