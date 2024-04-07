import React, { useEffect, useState } from "react";
import "./style.scss";
import { ICategory } from "@/types/categories";
import { fetchCategories } from "@/services/products";
import { normalizeCategories } from "@/utils/adapters";
import { Button, Spinner } from "react-bootstrap";

export const CategoriesList = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCategories = async () => {
      try {
        setLoading(true);
        const { data } = await fetchCategories();
        setCategories(normalizeCategories(data));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getCategories();
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
                className="categories-list__link"
                onClick={() => console.log(category)}
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
