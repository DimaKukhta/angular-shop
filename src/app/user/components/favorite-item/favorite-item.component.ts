import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.scss'],
})
export class FavoriteItemComponent {

  constructor(public router: Router, private userService: UserService) { }

  @Input() goodsItem!:any;

  public onClickGoodsItem(item: any): void {
    const { category, subCategory, id } = item;
    this.router.navigate(['category', category, subCategory, id]);
  }

  public onDelete(id: string): void {
    this.userService.deleteFromFavorites(id);
  }

}
