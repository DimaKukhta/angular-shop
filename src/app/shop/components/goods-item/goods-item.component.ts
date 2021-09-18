import { Component, Input, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { IGoodsItem } from 'src/app/redux/models/goods.model';

@Component({
  selector: 'app-goods-item',
  templateUrl: './goods-item.component.html',
  styleUrls: ['./goods-item.component.scss'],
})
export class GoodsItemComponent {
  constructor(config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }

  @Input() goodsItem!: IGoodsItem;
}
