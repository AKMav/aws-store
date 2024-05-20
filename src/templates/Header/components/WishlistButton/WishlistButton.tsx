import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { RoundButton } from "@/components/UIKit";
import WishlistLogo from "@/assets/icons/wishlist.svg";
import { Routes } from "@/routes";
import "./style.scss";
import { Badge } from "react-bootstrap";

export const WishlistButton = () => {
  const navigate = useNavigate();

  const openWishlist = () => {
    navigate(Routes.Wishlist);
  };

  const wishlist = useSelector((state: RootState) => state.wishlist.list);
  const wishlistCount = useMemo(() => wishlist.length, [wishlist]);

  return (
    <RoundButton className="wishlist-button" clickHandle={openWishlist}>
      <img
        src={WishlistLogo}
        alt="wishlist button"
        draggable="false"
        className="wishlist-button__image"
      />
      {!!wishlistCount && (
        <Badge pill bg="danger" className="wishlist-button__label">
          {wishlistCount}
        </Badge>
      )}
    </RoundButton>
  );
};
