import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { tap } from 'rxjs/operators';
import { IGoodsItem } from 'src/app/redux/models/goods.model';

@Component({
  selector: 'app-goods-item',
  templateUrl: './goods-item.component.html',
  styleUrls: ['./goods-item.component.scss'],
})
export class GoodsItemComponent implements OnInit {
  constructor(config: NgbRatingConfig, public route: ActivatedRoute, public router: Router) {
    config.max = 5;
    config.readonly = true;
  }

  private params!: any;
  
  ngOnInit(): void {
    this.route.params
      .pipe(
        tap((params) => {
          this.params = params;
        }),
      )
      .subscribe();
  }

  public onClickGoodsItem(id: string): void {
    this.router.navigate(['category', this.params.categoryId, this.params.subCategoryId, id]);
  }

  @Input() goodsItem!: IGoodsItem;
}
