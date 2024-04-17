import { ProductsList } from "@/components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { IProductCard, IFetchedProduct } from "@/types/products";
import { fetchProductsByCategory } from "@/services/products";
import { formatFetchedProductForCard } from "@/decorators/productFormatters";
import { RootState } from "@/store";

interface IProps {
  classes?: string;
}

const CATEGORY = "category";

export const ProductsByCategory = ({ classes }: IProps) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<IProductCard[]>([]);
  const currentCategory = useSelector(
    (state: RootState) => state.categories.currentCategory
  );
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const paramsCategory = searchParams.get(CATEGORY);

    const getProducts = async (category?: string) => {
      setLoading(true);

      try {
        const response = await fetchProductsByCategory({
          category,
          queries: {
            limit: 8,
          },
        });

        const fetchedProducts = (
          response.data as { products: IFetchedProduct[] }
        ).products;

        setProducts(formatFetchedProductForCard(fetchedProducts));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (paramsCategory !== currentCategory) return;
    getProducts(currentCategory);
  }, [currentCategory]);

  return (
    <>
      <ProductsList classes={classes} products={products} loading={loading} />
    </>
  );
};
