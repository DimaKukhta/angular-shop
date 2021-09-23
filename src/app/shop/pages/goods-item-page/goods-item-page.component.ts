import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { loadGoodsItem } from 'src/app/redux/actions/goods.actions';
import { selectCurrentGoodsItem } from 'src/app/redux/selectors/goods.selectors';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-goods-item-page',
  templateUrl: './goods-item-page.component.html',
  styleUrls: ['./goods-item-page.component.scss'],
})
export class GoodsItemPageComponent implements OnInit {
  constructor(
    private store: Store,
    public route: ActivatedRoute,
    config: NgbRatingConfig,
    private userService: UserService,
    public router: Router,
  ) {
    config.max = 5;
    config.readonly = true;
  }

  public params!: any;

  public goodsItem$: Observable<any> = this.store.select(
    selectCurrentGoodsItem,
  );

  ngOnInit(): void {
    this.route.params
      .pipe(
        tap((params) => {
          this.params = params;
        }),
      )
      .subscribe();
    this.store.dispatch(
      loadGoodsItem({
        goodsItemId: this.params.goodsItemId,
      }),
    );
  }

  public addToCard(id: string): void {
    this.userService.addGoodsItemtoCart(id);
  }

  public addToFavorites(id: string): void {
    this.userService.addGoodsItemtoFavorites(id);
  }

  public isInCart(id: string): boolean {
    return this.userService.isInCart(id);
  }

  public isInFavorite(id: string): boolean {
    return this.userService.isInFavorite(id);
  }

  public goToCategoryPage(): void {
    this.router.navigate(['categories']);
  }

  public goToSubCategoryPage(): void {
    this.router.navigate(['category', this.params.categoryId, this.params.subCategoryId]);
  }
}
