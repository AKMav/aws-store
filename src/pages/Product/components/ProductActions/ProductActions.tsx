import { useState } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import MinusIcon from "@/assets/icons/minus-icon.svg";
import PlusIcon from "@/assets/icons/plus-icon.svg";
import HeartIcon from "@/assets/icons/heart.svg";
import "./style.scss";

interface IProps {
  inStock: boolean;
  inWishlist: boolean;
  toggleWishlist: () => void;
  onBuyNow: (quantity: number) => void;
}

export const ProductActions = ({
  inStock,
  inWishlist,
  toggleWishlist,
  onBuyNow,
}: IProps) => {
  const [count, setCount] = useState(1);

  const decrementCount = () => {
    if (count <= 1) {
      setCount(1);
    } else {
      setCount((prev) => prev - 1);
    }
  };

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="product-actions">
      <div className="product-actions__buttons-row">
        <ButtonGroup className="count-setter">
          <Button
            variant="outline-secondary"
            className="count-setter__button minus-button"
            onClick={decrementCount}
          >
            <img
              src={MinusIcon}
              width={24}
              height={24}
              className="count-setter__icon"
            />
          </Button>
          <span className="count-setter__result ">{count}</span>
          <Button
            variant="danger"
            className="count-setter__button"
            onClick={incrementCount}
          >
            <img
              src={PlusIcon}
              width={24}
              height={24}
              className="count-setter__icon"
            />
          </Button>
        </ButtonGroup>
        <Button
          variant="danger"
          className="product-actions__buy-button"
          disabled={!inStock}
          onClick={() => onBuyNow(count)}
        >
          Buy Now
        </Button>
        <Button
          variant={inWishlist ? "danger" : "outline-secondary"}
          className="product-actions__wishlist-button"
          onClick={toggleWishlist}
        >
          <img src={HeartIcon} width={32} height={32} />
        </Button>
      </div>
    </div>
  );
};
