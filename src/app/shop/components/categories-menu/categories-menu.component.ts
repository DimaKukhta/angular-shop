import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setCurrentCategory } from 'src/app/redux/actions/catigories.actions';
import { selectCategoriesNames, selectCurrentCategory, selectSubCategories } from 'src/app/redux/selectors/caregories.selectors';

@Component({
  selector: 'app-categories-menu',
  templateUrl: './categories-menu.component.html',
  styleUrls: ['./categories-menu.component.scss'],
})
export class CategoriesMenuComponent {
  constructor(private store: Store) {
  }

  public categories$: Observable<any> = this.store.select(selectCategoriesNames);

  public currentCategory$: Observable<string> = this.store.select(selectCurrentCategory);

  public subCategories$: Observable<any> = this.store.select(selectSubCategories);

  public onFocus(categoryName: string): void {
    this.store.dispatch(setCurrentCategory({ category: categoryName }));
  }
}
