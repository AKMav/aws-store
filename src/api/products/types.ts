export interface IProductsGetOptions {
  category?: string;
  queries: {
    limit?: number;
    skip?: number;
  };
}

export type AvailabilityStatus = "In Stock" | "Low Stock";

export interface IFetchedProduct {
  availabilityStatus: AvailabilityStatus;
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
