import { CATEGORY } from "@/constants";

export const getCategoryByUrl = () => {
  const params = new URLSearchParams(document.location.search);
  return params.get(CATEGORY) || "";
};
