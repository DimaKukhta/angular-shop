import { Pipe, PipeTransform } from '@angular/core';
import { IGoodsItem } from 'src/app/redux/models/goods.model';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {

  transform(array: Array<IGoodsItem> | [], type: string): Array<IGoodsItem> | [] {
    if (type === 'rating') {
      return [...array].sort((a: IGoodsItem, b: IGoodsItem) => {
        return b.rating - a.rating;
      });
    }
    if (type === 'price') {
      return [...array].sort((a: IGoodsItem, b: IGoodsItem) => {
        return b.price - a.price;
      });
    }
    return array;
  }

}
