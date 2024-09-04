import { http, HttpResponse } from "msw";
import { fetchedProductResponse } from "../constants/products";
import { SERVER_URL } from "../constants/paths";

export const handlers = [
  http.get(`${SERVER_URL}/products/:id`, () => {
    return HttpResponse.json(fetchedProductResponse);
  }),
];
