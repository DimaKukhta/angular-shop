import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectCategoriesNames } from 'src/app/redux/selectors/caregories.selectors';

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
  constructor(private store: Store) {}
  
  public catygories$ = this.store.pipe(select(selectCategoriesNames)); /*: Array<ICategory> = [
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
  ];*/
}
