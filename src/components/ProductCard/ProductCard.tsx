import { useCallback, useState } from "react";
import { Fade } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import { RoundButton } from "@/components/UIKit";
import EyeIcon from "@/assets/icons/eye.svg";
import HeartIcon from "@/assets/icons/heart.svg";
import { IProductCard } from "@/types/products";
import "./style.scss";

interface IProps {
  product: IProductCard;
  buyerCartListIds: Array<IProductCard["id"]>;
  onAddToCart: (item: IProductCard) => void;
  onRemoveFromCart: (id: IProductCard["id"]) => void;
}

export const ProductCard = ({
  product,
  buyerCartListIds,
  onAddToCart,
  onRemoveFromCart,
}: IProps) => {
  const [addBtnVisibility, setAddBtnVisibility] = useState(false);

  const mouseEnter = () => {
    setAddBtnVisibility(true);
  };

  const mouseLeave = () => {
    setAddBtnVisibility(false);
  };

  const addToWishList = (product: IProductCard) => {
    console.log(product, " - add to wishlist");
  };

  const wasAddedToCart = useCallback(
    (id: IProductCard["id"]) => buyerCartListIds.includes(id),
    [buyerCartListIds]
  );

  const openProduct = (id: IProductCard["id"]) => {
    console.log(id, " - open");
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
          src={mainPicture}
          alt={`picture of ${name}`}
          className="product-card__image"
        />

        <div className="product-card__buttons">
          <RoundButton clickHandle={() => addToWishList(product)}>
            <img src={HeartIcon} width={24} height={24} />
          </RoundButton>
          <RoundButton clickHandle={() => openProduct(id)}>
            <img src={EyeIcon} width={24} height={24} />
          </RoundButton>
        </div>

        <Fade in={addBtnVisibility} timeout={500}>
          {wasAddedToCart(id) ? (
            <button
              className="product-card__cart-button product-card__cart-button_remove"
              onClick={() => onRemoveFromCart(id)}
            >
              Remove From Cart
            </button>
          ) : (
            <button
              className="product-card__cart-button"
              onClick={() => onAddToCart(product)}
            >
              Add To Cart
            </button>
          )}
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
            <span className="product-card__comments-count">{`"(${commentsCount})"`}</span>
          )}
        </div>
      </div>
    </div>
  );
};
