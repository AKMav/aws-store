import { useMemo } from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "@/store";
import { RoundButton } from "@/components/UIKit";
import CartLogo from "@/assets/icons/cart.svg";
import "./style.scss";

const CART_PATH = "cart";

export const BuyerCartButton = () => {
  const navigate = useNavigate();

  const openCart = () => {
    navigate(CART_PATH);
  };

  const buyerCartList = useSelector((state: RootState) => state.buyerCart.list);
  const cartListCount = useMemo(() => buyerCartList.length, [buyerCartList]);

  return (
    <RoundButton clickHandle={openCart} className="buyer-cart-button">
      <img
        src={CartLogo}
        alt="buyer cart icon"
        draggable="false"
        className="buyer-cart-button__image"
      />
      {!!cartListCount && (
        <Badge pill bg="danger" className="buyer-cart-button__label">
          {cartListCount}
        </Badge>
      )}
    </RoundButton>
  );
};
