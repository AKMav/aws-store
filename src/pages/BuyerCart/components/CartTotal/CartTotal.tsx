import { Button } from "react-bootstrap";
import { getFixedPrice } from "@/decorators/priceFormatters";
import "./style.scss";

interface IProps {
  proceedToCheckout: () => void;
  productsTotalPrice: number;
}

const deliveryPrice = Math.round(Math.random() * 100);

export const CartTotal = ({
  productsTotalPrice,
  proceedToCheckout,
}: IProps) => {
  return (
    <div className="cart-total">
      <h2 className="cart-total__title">Cart Total</h2>
      <div className="cart-total__row">
        <span>Subtotal:</span>
        <span>${getFixedPrice(productsTotalPrice, 2)}</span>
      </div>
      <div className="cart-total__row">
        <span>Delivery price:</span>
        <span>${deliveryPrice}</span>
      </div>
      <div className="cart-total__row">
        <span>Total:</span>
        <span>${getFixedPrice(productsTotalPrice + deliveryPrice, 2)}</span>
      </div>
      <Button
        variant="danger"
        className="cart-total__button"
        onClick={proceedToCheckout}
      >
        Proceed to checkout
      </Button>
    </div>
  );
};
