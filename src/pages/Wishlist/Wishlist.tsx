import { Button, Container } from "react-bootstrap";
import { useCartActions, useWishlistActions } from "@/hooks";
import { IProductCard } from "@/types/products";
import { WishProductList, EmptyWishlist } from "./components";
import "./style.scss";

const Wishlist = () => {
  const { onSimpleProductAddToCart, isProductInCart } = useCartActions();
  const { onProductRemoveFromWishlist, wishlist } = useWishlistActions();

  const addToCart = (product: IProductCard) => {
    if (!isProductInCart(product.id)) {
      onSimpleProductAddToCart(product);
    }
    onProductRemoveFromWishlist(product.id);
  };

  const addAllToCar = () => {
    wishlist.forEach((product) => addToCart(product));
  };

  return (
    <Container className="wishlist-page">
      {wishlist.length ? (
        <>
          <div className="wishlist-page__row">
            <span>Wishlist ({wishlist.length})</span>
            <Button
              variant="outline-dark"
              className="wishlist-page__button"
              onClick={addAllToCar}
            >
              Move All To Bag
            </Button>
          </div>
          <WishProductList
            removeFromWishlist={onProductRemoveFromWishlist}
            addProductToBuyerCart={addToCart}
            list={wishlist}
          />
        </>
      ) : (
        <EmptyWishlist />
      )}
    </Container>
  );
};

export default Wishlist;
