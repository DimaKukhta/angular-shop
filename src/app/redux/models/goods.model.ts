export interface IGoodsItem {
  id: string;
  name: string;
  imageUrls: Array<string>;
  availableAmount: number;
  price: number;
  rating: number;
  description: number;
  isInCart: boolean;
  isFavorite: boolean;
}

export interface IGoodsState {
  goods: Array<IGoodsItem>;
}
