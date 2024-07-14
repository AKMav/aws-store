import { CATEGORY } from "@/constants";

export const getCategoryByUrl = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get(CATEGORY) || "";
};
