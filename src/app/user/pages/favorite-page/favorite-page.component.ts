import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { forkJoin } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { selectUserFavorite } from 'src/app/redux/selectors/user.selector';
import { ShopService } from 'src/app/shop/services/shop.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.scss'],
})
export class FavoritePageComponent implements OnInit {

  constructor(private userService: UserService, private shopService: ShopService, private store: Store) { }

  public favoriteItems$ = this.store.select(selectUserFavorite);

  public favoriteItems: Array<any> = [];

  ngOnInit(): void {
    this.userService.getUserInfo();
    this.favoriteItems$
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
        this.favoriteItems = result;
      });
  }
}
