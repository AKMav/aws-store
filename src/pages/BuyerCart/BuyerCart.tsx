import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ProductsTable, EmptyCart } from "./components";
import { RootState } from "@/store";
import "./style.scss";

const BuyerCart = () => {
  const buyerCartList = useSelector((state: RootState) => state.buyerCart.list);

  return (
    <Container>
      <div className="buyer-cart-page">
        {buyerCartList?.length ? (
          <ProductsTable products={buyerCartList} />
        ) : (
          <EmptyCart />
        )}
      </div>
    </Container>
  );
};

export default BuyerCart;
