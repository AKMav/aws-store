import { ProductsList } from "@/components";
import { useCategoryFromParams } from "@/hooks/useCategoryFromParams";
import { IProductCard, IFetchedProduct } from "@/types/products";
import { fetchProductsByCategory } from "@/services/products";
import { formatFetchedProductForCard } from "@/decorators/productFormatters";
import { useEffect, useState } from "react";

interface IProps {
  classes?: string;
}

export const ProductsByCategory = ({ classes }: IProps) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<IProductCard[]>([]);
  const { currentCategory } = useCategoryFromParams();

  useEffect(() => {
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

    getProducts(currentCategory);
  }, [currentCategory]);

  return (
    <>
      <ProductsList classes={classes} products={products} loading={loading} />
    </>
  );
};
