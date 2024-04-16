import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const CATEGORY = "category";

export const useCategoryFromParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentCategory, setCategory] = useState("");

  const getCategoryFromParams = () => {
    const category = searchParams.get(CATEGORY);

    if (category) {
      setCategory(category);
    }
  };

  const setCategoryToParams = (category: string) => {
    setSearchParams({ category });
  };

  useEffect(getCategoryFromParams, [searchParams]);

  return {
    currentCategory,
    setCategoryToParams,
  };
};
