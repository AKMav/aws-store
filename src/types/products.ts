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

export interface IProductCard {
  id: string | number;
  name: string;
  price: number;
  rating: number;
  discountPercentage?: number;
  mainPicture: string;
  commentsCount?: number;
  isNew?: boolean;
}
