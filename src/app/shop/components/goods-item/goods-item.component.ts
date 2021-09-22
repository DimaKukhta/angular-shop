import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { tap } from 'rxjs/operators';
import { IGoodsItem } from 'src/app/redux/models/goods.model';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-goods-item',
  templateUrl: './goods-item.component.html',
  styleUrls: ['./goods-item.component.scss'],
})
export class GoodsItemComponent implements OnInit {
  constructor(
    config: NgbRatingConfig,
    public route: ActivatedRoute,
    public router: Router,
    private userService: UserService,
  ) {
    config.max = 5;
    config.readonly = true;
  }

  @Input() disabledCart!: boolean;

  @Input() disabledFavorite!: boolean;

  @Input() goodsItem!: IGoodsItem;

  private params!: any;

  ngOnInit(): void {
    console.log(this.disabledFavorite);
    this.route.params
      .pipe(
        tap((params) => {
          this.params = params;
        }),
      )
      .subscribe();
  }

  public onClickGoodsItem(id: string): void {
    this.router.navigate([
      'category',
      this.params.categoryId,
      this.params.subCategoryId,
      id,
    ]);
  }

  public addToCard(id: string): void {
    this.userService.addGoodsItemtoCart(id);
  }

  public addToFavorites(id: string): void {
    this.userService.addGoodsItemtoFavorites(id);
  }
}
