import { Button } from "react-bootstrap";
import "./style.scss";

interface IProps {
  productsTotalPrice: number;
}

const deliveryPrice = Math.round(Math.random() * 100);

export const CartTotal = ({ productsTotalPrice }: IProps) => {
  return (
    <div className="cart-total">
      <h2 className="cart-total__title">Cart Total</h2>
      <div className="cart-total__row">
        <span>Subtotal:</span>
        <span>${productsTotalPrice}</span>
      </div>
      <div className="cart-total__row">
        <span>Delivery price:</span>
        <span>${deliveryPrice}</span>
      </div>
      <div className="cart-total__row">
        <span>Total:</span>
        <span>${productsTotalPrice + deliveryPrice}</span>
      </div>
      <Button variant="danger" className="cart-total__button">
        Proceed to checkout
      </Button>
    </div>
  );
};
