import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { forkJoin, Observable } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { IGoodsItem } from 'src/app/redux/models/goods.model';
import { selectUserCart } from 'src/app/redux/selectors/user.selector';
import { ShopService } from 'src/app/shop/services/shop.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  constructor(
    private userService: UserService,
    private store: Store,
    private shopService: ShopService,
  ) {}

  public cartItems$: Observable<any> = this.store.select(selectUserCart);

  public cartItems: any = [];

  ngOnInit(): void {
    this.userService.getUserInfo();
    this.cartItems$
      .pipe(
        tap((array) => {
          console.log(array);
        }),
        map((array) =>
          array.map((element: string) => this.shopService.getGoodsItem(element)),
        ),
        tap((array) => {
          console.log(array);
        }),
        mergeMap((array) => {
          return forkJoin(array);
        }),
        catchError((err) => {
          throw new Error(err);
        }),
      )
      .subscribe((result) => {
        this.cartItems = result.map((element: any) => {
          return { ...element, amount: 1 };
        });
      });
  }

  public getPrice(): number {
    if (this.cartItems.length) {
      return this.cartItems.reduce((prev: number, current: IGoodsItem) => {
        return prev + current.price;
      }, 0);
    }
    return 0;
  }
}
