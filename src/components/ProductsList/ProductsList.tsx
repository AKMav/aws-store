import { ProductCard } from "@/components";
import './style.scss';

interface IProps {
  classes: string;
}

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
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};
