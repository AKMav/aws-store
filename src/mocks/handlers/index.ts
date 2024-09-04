import { handlers as categoriesHandlers } from "./categories";
import { handlers as productsHandlers } from "./products";

export const handlers = [...categoriesHandlers, ...productsHandlers];
