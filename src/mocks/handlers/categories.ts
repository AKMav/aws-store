import { http, HttpResponse } from "msw";
import { fetchedCategoriesResponse } from "../constants/categories";
import { SERVER_URL } from "../constants/paths";

export const handlers = [
  http.get(`${SERVER_URL}/products/categories`, () => {
    return HttpResponse.json(fetchedCategoriesResponse);
  }),
];
