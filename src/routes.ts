import { IRouteParams } from "@/types/routeParams";

export enum Routes {
  Home = "/",
  Cart = "cart",
  Wishlist = "wishlist",
  Contact = "contact",
  About = "about",
  Login = "login",
  Products = "products",
  NotFound = "*",
}

export const RouteParams: IRouteParams = {
  ProductId: "productId",
};
