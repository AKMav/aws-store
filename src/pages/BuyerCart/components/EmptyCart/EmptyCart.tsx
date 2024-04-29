import EmptyCartImage from "@/assets/images/empty-card.png";
import { BackHomeButton } from "@/components/UIKit";
import "./style.scss";

export const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <img
        src={EmptyCartImage}
        alt="empty card image"
        className="empty-cart__image"
      />
      <BackHomeButton />
    </div>
  );
};
