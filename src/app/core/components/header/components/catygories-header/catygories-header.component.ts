import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { setCurrentCategory } from 'src/app/redux/actions/catigories.actions';
import {
  selectAllCaregories,
  selectCategoriesNames,
} from 'src/app/redux/selectors/caregories.selectors';

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
  constructor(private store: Store, public router: Router) {}

  public catygories$ = this.store.pipe(select(selectCategoriesNames));

  public categories$ = this.store.select(selectAllCaregories);

  public onCategoriesPage(category: any): void {
    this.store.dispatch(setCurrentCategory({ category }));
    this.router.navigate(['categories']);
  }
}
