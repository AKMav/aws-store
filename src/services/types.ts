export interface IProductsGetOptions {
  category?: string;
  queries: {
    limit?: number;
    skip?: number;
  };
}
