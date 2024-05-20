import { useMemo } from "react";
import { Button, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ProductsTable, EmptyCart, CartTotal } from "./components";
import { useNavigate } from "react-router-dom";
import { RootState } from "@/store";
import { Routes } from "@/routes";
import "./style.scss";

const BuyerCart = () => {
  const navigate = useNavigate();

  const buyerCartList = useSelector((state: RootState) => state.buyerCart.list);

  const productsTotalPrice = useMemo(
    () =>
      buyerCartList.reduce(
        (acc, { price, quantity, priceWithDiscount }) =>
          acc + (priceWithDiscount || price) * quantity,
        0
      ),
    [buyerCartList]
  );

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
            <CartTotal productsTotalPrice={productsTotalPrice} />
          </div>
        </>
      ) : (
        <EmptyCart />
      )}
    </Container>
  );
};

export default BuyerCart;
