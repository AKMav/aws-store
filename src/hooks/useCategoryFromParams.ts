import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {setCurrentCategory } from "@/store/categories";

const CATEGORY = "category";

export const useCategoryFromParams = () => {
  const dispatch = useDispatch();
  const currentCategory = useSelector((state: RootState) => state.categories.currentCategory);
  const [searchParams, setSearchParams] = useSearchParams();

  const paramsCategory = searchParams.get(CATEGORY);
  dispatch(setCurrentCategory(paramsCategory || ''))

  const setCategoryToParams = (category: string) => {
    setSearchParams({ category });
  };
  
  return {
    currentCategory,
    setCategoryToParams,
  };
};
