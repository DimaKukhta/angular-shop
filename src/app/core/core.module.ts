import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SelectCityComponent } from './components/header/components/select-city/select-city.component';
import { ContactsHeaderComponent } from './components/header/components/contacts-header/contacts-header.component';
import { MoreContactsComponent } from './components/header/components/more-contacts/more-contacts.component';
import { NavigationHeaderComponent } from './components/header/components/navigation-header/navigation-header.component';
import { SharedModule } from '../shared/shared.module';
import { SearchInputComponent } from './components/header/components/search-input/search-input.component';
import { AccountComponent } from './components/header/components/account/account.component';
import { BasketComponent } from './components/header/components/basket/basket.component';
import { CategoryComponent } from './components/header/components/category/category.component';
import { LogoComponent } from './components/header/components/logo/logo.component';
import { CatygoriesHeaderComponent } from './components/header/components/catygories-header/catygories-header.component';
import { ContactsFooterComponent } from './components/footer/components/contacts-footer/contacts-footer.component';
import { SocialFooterComponent } from './components/footer/components/social-footer/social-footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SelectCityComponent,
    ContactsHeaderComponent,
    MoreContactsComponent,
    NavigationHeaderComponent,
    SearchInputComponent,
    AccountComponent,
    BasketComponent,
    CategoryComponent,
    LogoComponent,
    CatygoriesHeaderComponent,
    ContactsFooterComponent,
    SocialFooterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
