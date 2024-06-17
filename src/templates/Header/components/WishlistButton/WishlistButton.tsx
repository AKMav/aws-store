import { Badge } from "react-bootstrap";
import { RoundButton } from "@/components/shared";
import WishlistLogo from "@/assets/icons/wishlist.svg";
import "./style.scss";

interface IProps {
  itemsCount: number;
  openWishlist: () => void;
}

export const WishlistButton = ({ itemsCount, openWishlist }: IProps) => {
  return (
    <RoundButton className="wishlist-button" clickHandle={openWishlist}>
      <img
        src={WishlistLogo}
        alt="wishlist button"
        draggable="false"
        className="wishlist-button__image"
      />
      {!!itemsCount && (
        <Badge pill bg="danger" className="wishlist-button__label">
          {itemsCount}
        </Badge>
      )}
    </RoundButton>
  );
};
