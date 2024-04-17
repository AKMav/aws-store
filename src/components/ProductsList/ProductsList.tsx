import { ProductCard } from "@/components";
import { IProductCard } from "@/types/products";
import "./style.scss";
import { Spinner } from "react-bootstrap";

interface IProps {
  products: IProductCard[];
  classes?: string;
  loading?: boolean;
}

export const ProductsList = ({ classes, products, loading }: IProps) => {
  return (
    <div className={classes ? `products-list ${classes}` : "products-list"}>
      <div className="products-list__header">
        <div className="block-label">
          <div className="block-label__rect" />
          <h3 className="block-label__title">Our Products</h3>
        </div>
        <h2 className="products-list__title">Explore Our Products</h2>
        {loading && (
          <Spinner
            className="products-list__spinner"
            animation="grow"
            variant="secondary"
          />
        )}
      </div>

      {!products?.length && !loading ? (
        <div className="products-list__empty">
          <h3>Products not found</h3>
        </div>
      ) : (
        <div className="products-list__grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
