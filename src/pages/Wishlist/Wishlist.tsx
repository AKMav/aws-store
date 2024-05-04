import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { removeFromWishlist } from "@/store/wishlist";
import { addProductToCart } from "@/store/buyerCart";
import { IProductCard } from "@/types/products";
import { WishProductList, EmptyWishlist } from "./components";
import "./style.scss";

const Wishlist = () => {
  const dispatch = useDispatch();

  const wishlist = useSelector(({ wishlist }: RootState) => wishlist.list);
  const buyerCartList = useSelector(
    ({ buyerCart }: RootState) => buyerCart.list
  );

  const isProductInCart = (id: IProductCard["id"]) =>
    buyerCartList.findIndex((item) => item.id === id) > -1;

  const onlyRemoveFromWishlist = (id: IProductCard["id"]) => {
    dispatch(removeFromWishlist(id));
  };

  const addToCart = (product: IProductCard) => {
    if (!isProductInCart(product.id)) {
      dispatch(addProductToCart(product));
    }
    onlyRemoveFromWishlist(product.id);
  };

  return (
    <Container className="wishlist-page">
      {wishlist.length ? (
        <WishProductList
          removeFromWishlist={onlyRemoveFromWishlist}
          addProductToBuyerCart={addToCart}
          list={wishlist}
        />
      ) : (
        <EmptyWishlist />
      )}
    </Container>
  );
};

export default Wishlist;
