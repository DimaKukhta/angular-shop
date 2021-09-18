import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { loadGoodsItem } from 'src/app/redux/actions/goods.actions';
import { selectCurrentGoodsItem } from 'src/app/redux/selectors/goods.selectors';

@Component({
  selector: 'app-goods-item-page',
  templateUrl: './goods-item-page.component.html',
  styleUrls: ['./goods-item-page.component.scss'],
})
export class GoodsItemPageComponent implements OnInit {
  constructor(private store: Store, public route: ActivatedRoute) {}

  private params!: any;

  public goodsItem$: Observable<any> = this.store.select(
    selectCurrentGoodsItem,
  );

  ngOnInit(): void {
    this.route.params
      .pipe(
        tap((params) => {
          this.params = params;
          console.log(this.params)
        }),
      )
      .subscribe();
    this.store.dispatch(
      loadGoodsItem({
        goodsItemId: this.params.goodsItemId,
      }),
    );
  }
}
