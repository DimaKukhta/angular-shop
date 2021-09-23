import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { setCurrentCategory } from 'src/app/redux/actions/catigories.actions';
import { ICategoryResponse } from 'src/app/redux/models/categories.model';
import { selectCategoriesNames, selectCurrentCategory, selectSubCategories } from 'src/app/redux/selectors/caregories.selectors';

@Component({
  selector: 'app-categories-menu',
  templateUrl: './categories-menu.component.html',
  styleUrls: ['./categories-menu.component.scss'],
})
export class CategoriesMenuComponent implements OnInit, OnDestroy {
  constructor(private store: Store, public router: Router) {
  }

  public categories$: Observable<any> = this.store.select(selectCategoriesNames);

  public currentCategory$: Observable<ICategoryResponse> = this.store.select(selectCurrentCategory);

  public subCategories$: Observable<any> = this.store.select(selectSubCategories);

  public currentCategory!: ICategoryResponse;

  private destroyedSubject$ = new Subject<void>();

  private destroyed$ = this.destroyedSubject$.asObservable();

  public onFocus(category: ICategoryResponse): void {
    this.store.dispatch(setCurrentCategory({ category }));
  }

  public goToCategory(categoryId: string): void {
    this.router.navigateByUrl(`category/${this.currentCategory.id}/${categoryId}`);
  }

  ngOnInit(): void {
    this.currentCategory$
      .pipe(
        tap((currentCategory: ICategoryResponse) => {
          this.currentCategory = currentCategory;
        }),
        takeUntil(this.destroyed$),
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroyedSubject$.next();
    this.destroyedSubject$.complete();
  }
}
