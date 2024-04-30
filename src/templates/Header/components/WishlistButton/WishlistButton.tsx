import { useNavigate } from "react-router-dom";
import { RoundButton } from "@/components/UIKit";
import WishlistLogo from "@/assets/icons/wishlist.svg";
import { Routes } from "@/routes";
import "./style.scss";

export const WishlistButton = () => {
  const navigate = useNavigate();

  const openWishlist = () => {
    navigate(Routes.Wishlist);
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
