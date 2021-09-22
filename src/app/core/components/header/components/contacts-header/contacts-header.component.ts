import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MoreContactsComponent } from '../more-contacts/more-contacts.component';

@Component({
  selector: 'app-contacts-header',
  templateUrl: './contacts-header.component.html',
  styleUrls: ['./contacts-header.component.scss'],
})
export class ContactsHeaderComponent {

  constructor(private bottomSheet: MatBottomSheet) {
  }

  public onSheet(): void {
    this.bottomSheet.open(MoreContactsComponent);
  }
}
