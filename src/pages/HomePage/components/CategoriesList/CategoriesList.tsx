import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Spinner } from "react-bootstrap";
import { fetchCategories } from "@/services/products";
import { normalizeCategories } from "@/utils/adapters";
import { RootState } from "@/store";
import { updateAllCategories } from "@/store/categories";
import { useCategoryFromParams } from "@/hooks/useCategoryFromParams";
import "./style.scss";

export const CategoriesList = () => {
  // fetch all categories
  const dispatch = useDispatch();
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

  // set/get current category query params
  const { currentCategory, setCategoryToParams } = useCategoryFromParams();

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
