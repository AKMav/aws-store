export interface IProductsGetOptions {
  category?: string;
  queries: {
    limit?: string; // TODO change type by adapter
    skip?: string;
  };
}
