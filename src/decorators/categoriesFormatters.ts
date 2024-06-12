import { ICategory } from "@/types/categories";
import { IFetchedCategory } from "@/api/categories";

export const normalizeCategories = (
  sourceCategories: IFetchedCategory[]
): ICategory[] => {
  return sourceCategories.map(({ name, slug }) => ({
    category: slug,
    title: name,
  }));
};
