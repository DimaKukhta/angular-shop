import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { setCountry } from 'src/app/redux/actions/settings.actions';

interface ICity {
  name: string;
}

@Component({
  selector: 'app-select-sity',
  templateUrl: './select-city.component.html',
  styleUrls: ['./select-city.component.scss'],
})
export class SelectCityComponent {
  constructor(private store: Store) {}

  public cityes: Array<ICity> = [
    {
      name: 'Брест',
    },
    {
      name: 'Витебск',
    },
    {
      name: 'Гомель',
    },
    {
      name: 'Гродно',
    },
    {
      name: 'Минск',
    },
    {
      name: 'Могилёв',
    },
  ];

  public onSelect(countryName: string): void {
    this.store.dispatch(setCountry({ countryName }));
  }
}
