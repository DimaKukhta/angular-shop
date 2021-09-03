import { Component } from '@angular/core';

export interface ICategory {
  id: string;
  name: string;
}

@Component({
  selector: 'app-catygories-header',
  templateUrl: './catygories-header.component.html',
  styleUrls: ['./catygories-header.component.scss'],
})
export class CatygoriesHeaderComponent {
  public catygories: Array<ICategory> = [
    {
      id: 'appliances',
      name: 'Бытовая техника',
    },
    {
      id: 'electronics',
      name: 'Электроника',
    },
    {
      id: 'computers-peripherals',
      name: 'Компьютеры и периферия',
    },
    {
      id: 'furniture',
      name: 'Мебель',
    },
    {
      id: 'hobbies',
      name: 'Досуг и хобби',
    },
  ];
}
