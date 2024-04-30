import { Button, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ProductsTable, EmptyCart } from "./components";
import { useNavigate } from "react-router-dom";
import { RootState } from "@/store";
import "./style.scss";

const HOME_PATH = "/";

const BuyerCart = () => {
  const buyerCartList = useSelector((state: RootState) => state.buyerCart.list);
  const navigate = useNavigate();

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
                onClick={() => navigate(HOME_PATH)}
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
          </>
        ) : (
          <EmptyCart />
        )}
      </div>
    </Container>
  );
};

export default BuyerCart;
