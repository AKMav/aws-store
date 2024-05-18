export interface IFetchedProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface IProductBase {
  id: string | number;
  name: string;
  price: number;
  mainPicture: string;
  priceWithDiscount?: number | null;
}

export interface IProductCard extends IProductBase {
  rating: number;
  discountPercentage?: number | null;
  commentsCount?: number;
  isNew?: boolean;
}

export interface ICartProduct extends IProductBase {
  quantity: number;
}

export interface IFullProduct extends IProductCard {
  images: string[];
  stock: boolean;
  description: string;
}
