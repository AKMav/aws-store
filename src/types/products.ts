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
}

export interface IProductCard extends IProductBase {
  rating: number;
  discountPercentage?: number;
  commentsCount?: number;
  isNew?: boolean;
}

export interface ICartProduct extends IProductBase {
  quantity: number;
}
