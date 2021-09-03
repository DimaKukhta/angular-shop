import { Component } from '@angular/core';

interface IContact {
  name: string;
  iconName: string;
}

@Component({
  selector: 'app-contacts-footer',
  templateUrl: './contacts-footer.component.html',
  styleUrls: ['./contacts-footer.component.scss'],
})
export class ContactsFooterComponent {
  public contacts: Array<IContact> = [
    {
      iconName: 'phone',
      name: '+375 17 302 10 21',
    },
    {
      iconName: 'mail_outline',
      name: 'Почта',
    },
    {
      iconName: 'call',
      name: 'Заказать звонок',
    },
    {
      iconName: 'chat',
      name: 'Написать нам',
    },
  ];
}
