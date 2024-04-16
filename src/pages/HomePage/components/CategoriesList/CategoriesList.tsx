import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Spinner } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { fetchCategories } from "@/services/products";
import { normalizeCategories } from "@/utils/adapters";
import { RootState } from "@/store";
import { updateAllCategories } from "@/store/categories";
import "./style.scss";

const CATEGORY = "category";

export const CategoriesList = () => {
  const categories = useSelector((state: RootState) => state.categories.list);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
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
    getCategoryFromParams();
  }, []);

  useEffect(getCategoryFromParams, [searchParams]);

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
                onClick={() => setCategoryToParams(category)}
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
