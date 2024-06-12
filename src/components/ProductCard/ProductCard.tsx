import { useState } from "react";
import { Fade } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import { RoundButton } from "@/components/shared";
import EyeIcon from "@/assets/icons/eye.svg";
import HeartIcon from "@/assets/icons/heart.svg";
import { IProductCard } from "@/types/products";
import "./style.scss";

interface IProps {
  product: IProductCard;
  isProductInWishlist?: boolean;
  isProductInCart?: boolean;
  onAddToCart: (item: IProductCard) => void;
  onRemoveFromCart: (id: IProductCard["id"]) => void;
  onAddToWishlist: (item: IProductCard) => void;
  onRemoveFromWishlist: (id: IProductCard["id"]) => void;
  onOpenProduct: (id: IProductCard["id"]) => void;
}

export const ProductCard = ({
  product,
  isProductInCart,
  isProductInWishlist,
  onAddToCart,
  onRemoveFromCart,
  onAddToWishlist,
  onRemoveFromWishlist,
  onOpenProduct,
}: IProps) => {
  const [addBtnVisibility, setAddBtnVisibility] = useState(false);

  const mouseEnter = () => {
    setAddBtnVisibility(true);
  };

  const mouseLeave = () => {
    setAddBtnVisibility(false);
  };

  const wishlistActionToggle = (product: IProductCard) => {
    if (isProductInWishlist) {
      onRemoveFromWishlist(product.id);
    } else {
      onAddToWishlist(product);
    }
  };

  const buyerCartActionToggle = (product: IProductCard) => {
    if (isProductInCart) {
      onRemoveFromCart(product.id);
    } else {
      onAddToCart(product);
      onRemoveFromWishlist(product.id);
    }
  };

  const openProduct = (id: IProductCard["id"]) => {
    onOpenProduct(id);
  };

  const {
    id,
    name,
    price,
    rating,
    commentsCount,
    mainPicture,
    isNew,
    discountPercentage,
    priceWithDiscount,
  } = product;

  return (
    <div className="product-card">
      <div
        className="product-card__main"
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        {isNew && (
          <span className="product-card__tag product-card__tag_new">NEW</span>
        )}
        {discountPercentage && (
          <span className="product-card__tag product-card__tag_discount">
            -{Math.round(discountPercentage)}%
          </span>
        )}
        <img
          width={190}
          height={180}
          draggable="false"
          src={mainPicture}
          alt={`picture of ${name}`}
          className="product-card__image"
        />

        <div className="product-card__buttons">
          <RoundButton
            className={isProductInWishlist ? "button-checked" : null}
            clickHandle={() => wishlistActionToggle(product)}
          >
            <img src={HeartIcon} width={24} height={24} draggable="false" />
          </RoundButton>
          <RoundButton clickHandle={() => openProduct(id)}>
            <img src={EyeIcon} width={24} height={24} draggable="false" />
          </RoundButton>
        </div>

        <Fade in={addBtnVisibility} timeout={500}>
          <button
            className={`product-card__cart-button${
              isProductInCart ? " product-card__cart-button_remove" : ""
            }`}
            onClick={() => buyerCartActionToggle(product)}
          >
            {isProductInCart ? "Remove From Cart" : "Add To Cart"}
          </button>
        </Fade>
      </div>

      <div className="product-card__footer">
        <p className="product-card__name">{name}</p>
        <div className="product-card__info">
          {priceWithDiscount ? (
            <span className="product-card__price">
              ${priceWithDiscount}
              <span className="product-card__price_discount">${price}</span>
            </span>
          ) : (
            <span className="product-card__price">${price}</span>
          )}
          <Rating readonly allowFraction initialValue={rating} size={18} />
          {commentsCount && (
            <span className="product-card__comments-count">{`(${commentsCount})`}</span>
          )}
        </div>
      </div>
    </div>
  );
};
