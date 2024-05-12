import { Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "@/store";
import { addProductToCart, removeProductFromCart } from "@/store/buyerCart";
import { addToWishlist, removeFromWishlist } from "@/store/wishlist";
import { ProductCard } from "@/components";
import { IProductCard } from "@/types/products";
import { Routes } from "@/routes";
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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // buyer cart logic
  const buyerCartList = useSelector((state: RootState) => state.buyerCart.list);

  const onProductAddToCart = (product: IProductCard) => {
    dispatch(addProductToCart(product));
  };

  const onProductRemoveFromCart = (id: IProductCard["id"]) => {
    dispatch(removeProductFromCart(id));
  };

  const isProductInCart = (id: IProductCard["id"]) =>
    buyerCartList.findIndex((item) => item.id === id) > -1;

  // wishlist logic
  const wishlist = useSelector((state: RootState) => state.wishlist.list);

  const onProductAddToWishlist = (product: IProductCard) => {
    dispatch(addToWishlist(product));
  };

  const onProductRemoveFromWishlist = (id: IProductCard["id"]) => {
    dispatch(removeFromWishlist(id));
  };

  const isProductInWishlist = (id: IProductCard["id"]) =>
    wishlist.findIndex((item) => item.id === id) > -1;

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
                onAddToCart={onProductAddToCart}
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
