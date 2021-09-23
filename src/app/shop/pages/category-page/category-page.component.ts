import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { loadGoods } from 'src/app/redux/actions/goods.actions';
import { selectAllCaregories } from 'src/app/redux/selectors/caregories.selectors';
import { selectAllGoods } from 'src/app/redux/selectors/goods.selectors';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss'],
})
export class CategoryPageComponent implements OnInit {
  constructor(
    public route: ActivatedRoute,
    private store: Store,
    private userService: UserService,
    public router: Router,
  ) {}

  public params!: any;

  public goods$: Observable<any> = this.store.select(selectAllGoods);

  public startPosition = 0;

  public currentTypeSort = 'rating';

  public categories$ = this.store.select(selectAllCaregories);

  public categories: Array<any> = [];

  public loadPreviosGoods(): void {
    this.startPosition -= 10;
  }

  public loadNextGoods(): void {
    this.startPosition += 10;
  }

  ngOnInit(): void {
    this.route.params
      .pipe(
        tap((params) => {
          this.params = params;
        }),
      )
      .subscribe();
    this.store.dispatch(
      loadGoods({
        categoryId: this.params.categoryId,
        subCategoryId: this.params.subCategoryId,
      }),
    );
    this.categories$
      .pipe(
        tap((categories) => {
          this.categories = categories;
        }),
      )
      .subscribe();
  }

  public isInCart(id: string) {
    return this.userService.isInCart(id);
  }

  public isInFavorite(id: string) {
    return this.userService.isInFavorite(id);
  }

  public setSortType(type: string): void {
    this.currentTypeSort = type;
  }

  public goToCategory(): void {
    this.router.navigate(['categories']);
  }
}
