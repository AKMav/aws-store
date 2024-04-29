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
}

export interface IProductCard extends IProductBase {
  rating: number;
  mainPicture: string;
  discountPercentage?: number;
  commentsCount?: number;
  isNew?: boolean;
}

export interface ICartProduct extends IProductBase {
  quantity: number;
}
