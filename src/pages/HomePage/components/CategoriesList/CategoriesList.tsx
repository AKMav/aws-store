import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";
import { fetchCategories } from "@/services/products";
import { normalizeCategories } from "@/decorators/categoriesFormatters";
import { RootState } from "@/store";
import { updateAllCategories, setCurrentCategory } from "@/store/categories";
import { CATEGORY } from "@/types/categories";
import "./style.scss";

export const CategoriesList = () => {
  const dispatch = useDispatch();

  // all categories
  const [loading, setLoading] = useState(false);
  const categories = useSelector((state: RootState) => state.categories.list);

  useEffect(() => {
    const getCategories = async () => {
      try {
        setLoading(true);
        const { data } = await fetchCategories();
        dispatch(updateAllCategories(normalizeCategories(data)));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getCategories();
  }, []);

  // select category and save to query
  const currentCategory = useSelector(
    (state: RootState) => state.categories.currentCategory
  );
  const [searchParams, setSearchParams] = useSearchParams();

  const selectCategory = (category: string) => {
    dispatch(setCurrentCategory(category));
    setSearchParams({ category });
  };

  useEffect(() => {
    const paramsCategory = searchParams.get(CATEGORY);

    if (!paramsCategory && currentCategory) {
      setSearchParams({ category: currentCategory });
    }
  }, []);

  return (
    <div className="categories-list__wrapper">
      {loading ? (
        <Spinner animation="grow" variant="secondary" />
      ) : (
        <ul className="categories-list">
          {categories.map(({ title, category }) => (
            <li key={category} className="categories-list__item">
              <Button
                variant="link"
                className={
                  currentCategory === category
                    ? "categories-list__link categories-list__link_active"
                    : "categories-list__link"
                }
                onClick={() => selectCategory(category)}
              >
                {title}
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
