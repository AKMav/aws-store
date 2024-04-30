import { Button, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ProductsTable, EmptyCart, CartTotal } from "./components";
import { useNavigate } from "react-router-dom";
import { RootState } from "@/store";
import "./style.scss";
import { useMemo } from "react";

const BuyerCart = () => {
  const navigate = useNavigate();

  const buyerCartList = useSelector((state: RootState) => state.buyerCart.list);

  const productsTotalPrice = useMemo(
    () =>
      buyerCartList.reduce(
        (acc, { price, quantity }) => acc + price * quantity,
        0
      ),
    [buyerCartList]
  );

  return (
    <Container>
      <div className="buyer-cart-page">
        {buyerCartList?.length ? (
          <>
            <ProductsTable products={buyerCartList} />
            <div className="buyer-cart-page__row buttons-row">
              <Button
                variant="outline-dark"
                className="buyer-cart-page__button"
                onClick={() => navigate("/")}
              >
                Return To Shop
              </Button>

              <Button
                variant="outline-dark"
                className="buyer-cart-page__button"
              >
                Update Cart
              </Button>
            </div>
            <div className="buyer-cart-page__row">
              <CartTotal productsTotalPrice={productsTotalPrice} />
            </div>
          </>
        ) : (
          <EmptyCart />
        )}
      </div>
    </Container>
  );
};

export default BuyerCart;
