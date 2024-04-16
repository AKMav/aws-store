import { ProductsList } from "@/components";
import { useCategoryFromParams } from "@/hooks/useCategoryFromParams";
import { IProductCard, FetchedProduct } from "@/types/products";
import { useEffect } from "react";

interface IProps {
  classes?: string;
}

const products: IProductCard[] = [
  {
    id: "1",
    name: "Product 1",
    price: 100,
    rating: 4.5,
    mainPicture: "",
    commentsCount: 35,
  },
  {
    id: "2",
    name: "Product 2",
    price: 150,
    rating: 3.5,
    mainPicture: "",
    commentsCount: 23,
  },
  {
    id: "3",
    name: "Product 3",
    price: 50,
    rating: 5,
    mainPicture: "",
    commentsCount: 67,
  },
  {
    id: "4",
    name: "Product 4",
    price: 75,
    rating: 3,
    mainPicture: "",
    commentsCount: 0,
  },
];

export const ProductsByCategory = ({ classes }: IProps) => {
  const { currentCategory } = useCategoryFromParams();

  useEffect(() => {
    console.log(currentCategory);
  }, [currentCategory]);

  return (
    <>
      <ProductsList classes={classes} products={products} />
    </>
  );
};
