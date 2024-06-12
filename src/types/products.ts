import { AvailabilityStatus } from "@/api/products";

interface IProductBase {
  id: number;
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
  stock: number;
  availabilityStatus: AvailabilityStatus;
  description: string;
}
