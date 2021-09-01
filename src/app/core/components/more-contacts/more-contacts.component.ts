import { Component } from '@angular/core';

interface IContact {
  icon: string,
  label: string,
}

@Component({
  selector: 'app-more-contacts',
  templateUrl: './more-contacts.component.html',
  styleUrls: ['./more-contacts.component.scss'],
})
export class MoreContactsComponent {
  public contactsList: Array<IContact> = [
    {
      icon: 'phone',
      label: '+375 17 302 10 21',
    },
    {
      icon: 'mail_outline',
      label: 'Почта',
    },
    {
      icon: 'call',
      label: 'Заказать звонок',
    },
    {
      icon: 'chat',
      label: 'Написать нам',
    },
  ];
}
