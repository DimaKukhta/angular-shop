import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { SelectCityComponent } from './components/select-city/select-city.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { ContactsHeaderComponent } from './components/contacts-header/contacts-header.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MoreContactsComponent } from './components/more-contacts/more-contacts.component';
import { MatListModule } from '@angular/material/list';
import { NavigationHeaderComponent } from './components/navigation-header/navigation-header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SelectCityComponent,
    ContactsHeaderComponent,
    MoreContactsComponent,
    NavigationHeaderComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MatOptionModule,
    MatBottomSheetModule,
    MatListModule,
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
