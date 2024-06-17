import { Badge } from "react-bootstrap";
import { RoundButton } from "@/components/shared";
import CartLogo from "@/assets/icons/cart.svg";
import "./style.scss";

interface IProps {
  itemsCount: number;
  openCart: () => void;
}

export const BuyerCartButton = ({ itemsCount, openCart }: IProps) => {
  return (
    <RoundButton clickHandle={openCart} className="buyer-cart-button">
      <img
        src={CartLogo}
        alt="buyer cart icon"
        draggable="false"
        className="buyer-cart-button__image"
      />
      {!!itemsCount && (
        <Badge pill bg="danger" className="buyer-cart-button__label">
          {itemsCount}
        </Badge>
      )}
    </RoundButton>
  );
};
