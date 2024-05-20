import { EmptyList } from "@/components";
import EmptyWishlistImage from "@/assets/images/empty-wishlist.png";
import "./style.scss";

export const EmptyWishlist = () => {
  return <EmptyList className="empty-wishlist" imageSrc={EmptyWishlistImage} />;
};
