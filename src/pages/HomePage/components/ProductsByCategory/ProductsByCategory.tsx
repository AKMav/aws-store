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
  const [products, setProducts] = useState<IProductCard[]>([]);
  const { currentCategory } = useCategoryFromParams();

  const fetchProducts = async () => {
    const response = await fetchProductsByCategory({
      category: currentCategory,
      queries: {
        limit: "8",
      },
    });

    const fetchedProducts = (response.data as { products: IFetchedProduct[] })
      .products;

    setProducts(formatFetchedProductForCard(fetchedProducts));
  };

  useEffect(() => {
    fetchProducts();
  }, [currentCategory]);

  return (
    <>
      <ProductsList classes={classes} products={products} />
    </>
  );
};
