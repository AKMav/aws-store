import { ICategory } from "@/types/categories";

export const normalizeCategories = (
  sourceCategories: string[]
): ICategory[] => {
  return sourceCategories.map((category) => ({
    category,
    title: (category[0].toUpperCase() + category.slice(1)).split("-").join(" "),
  }));
};
