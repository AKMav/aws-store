import { Button, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RootState } from "@/store";
import { Routes } from "@/routes";
import { ProductsTable, EmptyCart, CartTotal } from "./components";
import { useTotalPrice } from "./hooks/useTotalPrice";
import "./style.scss";

const BuyerCart = () => {
  const navigate = useNavigate();

  // user
  const user = useSelector((state: RootState) => state.profile.user);

  // buyer cart
  const buyerCartList = useSelector((state: RootState) => state.buyerCart.list);
  const { totalPrice } = useTotalPrice(buyerCartList);

  const proceedToCheckout = () => {
    if (!user) {
      toast.error("You need to sign in to continue proceed to checkout");
    } else {
      navigate(Routes.Checkout);
    }
  };

  return (
    <Container className="buyer-cart-page">
      {buyerCartList?.length ? (
        <>
          <ProductsTable products={buyerCartList} />
          <div className="buyer-cart-page__row buttons-row">
            <Button
              variant="outline-dark"
              className="buyer-cart-page__button"
              onClick={() => navigate(Routes.Home)}
            >
              Return To Shop
            </Button>
          </div>
          <div className="buyer-cart-page__row">
            <CartTotal
              productsTotalPrice={totalPrice}
              proceedToCheckout={proceedToCheckout}
            />
          </div>
        </>
      ) : (
        <EmptyCart />
      )}
    </Container>
  );
};

export default BuyerCart;
