import { http, HttpResponse } from "msw";
import { fetchedCategoriesResponse } from "../constants/categories";

export const handlers = [
  http.get("/categories", () => {
    return HttpResponse.json(fetchedCategoriesResponse);
  }),
];
