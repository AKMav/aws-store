import { Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCartActions } from "@/hooks";
import { ProductCard } from "@/components";
import { IProductCard } from "@/types/products";
import { Routes } from "@/routes";
import { useWishlistActions } from "@/hooks";
import "./style.scss";

interface IProps {
  products: IProductCard[];
  classes?: string;
  loading?: boolean;
  hasMoreItems?: boolean;
  fetchMore?: () => void;
}

export const ProductsList = ({
  classes,
  products,
  loading,
  hasMoreItems,
  fetchMore,
}: IProps) => {
  const navigate = useNavigate();

  // buyer cart logic
  const { isProductInCart, onSimpleProductAddToCart, onProductRemoveFromCart } =
    useCartActions();

  // wishlist logic
  const {
    onProductAddToWishlist,
    onProductRemoveFromWishlist,
    isProductInWishlist,
  } = useWishlistActions();

  // open product
  const openProduct = (id: IProductCard["id"]) => {
    navigate(`${Routes.Products}/${id}`);
  };

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
        <>
          <div className="products-list__grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isProductInWishlist={isProductInWishlist(product.id)}
                isProductInCart={isProductInCart(product.id)}
                onAddToCart={onSimpleProductAddToCart}
                onRemoveFromCart={onProductRemoveFromCart}
                onAddToWishlist={onProductAddToWishlist}
                onRemoveFromWishlist={onProductRemoveFromWishlist}
                onOpenProduct={openProduct}
              />
            ))}
          </div>
          <div className="products-list__footer">
            {hasMoreItems && !!products?.length && (
              <div className="products-list__footer-row">
                <Button
                  className="fetch-more-btn"
                  variant="outline-secondary"
                  disabled={loading}
                  onClick={fetchMore}
                >
                  {loading ? "Loading…" : "Fetch more"}
                </Button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};
