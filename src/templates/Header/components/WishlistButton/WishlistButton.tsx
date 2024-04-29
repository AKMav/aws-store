import { useNavigate } from "react-router-dom";
import { RoundButton } from "@/components/UIKit";
import WishlistLogo from "@/assets/icons/wishlist.svg";
import "./style.scss";

const WISHLIST_PATH = "wishlist";

export const WishlistButton = () => {
  const navigate = useNavigate();

  const openWishlist = () => {
    navigate(WISHLIST_PATH);
  };

  return (
    <RoundButton className="wishlist-button" clickHandle={openWishlist}>
      <img
        src={WishlistLogo}
        alt="wishlist button"
        draggable="false"
        className="wishlist-button__image"
      />
    </RoundButton>
  );
};
