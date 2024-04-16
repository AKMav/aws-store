export interface FetchedProduct {
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
  mainPicture: string;
  commentsCount?: number;
}