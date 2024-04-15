import { ProductCard } from "@/components";
import { IProductCard } from "@/types/products";
import "./style.scss";

interface IProps {
  classes: string;
  products: IProductCard[];
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

export const ProductsList = ({ classes }: IProps) => {
  return (
    <div className={classes ? `products-list ${classes}` : "products-list"}>
      <div className="products-list__header">
        <div className="block-label">
          <div className="block-label__rect" />
          <h3 className="block-label__title">Our Products</h3>
        </div>
        <h2 className="products-list__title">Explore Our Products</h2>
      </div>
      <div className="products-list__grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
