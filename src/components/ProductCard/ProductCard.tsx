import "./style.scss";
import { useState } from "react";
import { Fade } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import { RoundButton } from "@/components/UIKit";
import EyeIcon from "@/assets/icons/eye.svg";
import HeartIcon from "@/assets/icons/heart.svg";
import { IProductCard } from "@/types/products";

interface IProps {
  product: IProductCard;
}

export const ProductCard = ({ product }: IProps) => {
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

  const openProduct = (id: IProductCard["id"]) => {
    console.log(id, " - open");
  };

  const addToCart = (product: IProductCard) => {
    console.log(product, " - add to cart");
  };

  const { id, name, price, rating, commentsCount, mainPicture, isNew } =
    product;

  return (
    <div className="product-card">
      <div
        className="product-card__main"
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        {isNew && <span className="product-card__new-tag">NEW</span>}
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
          <button
            className="product-card__add-btn"
            onClick={() => addToCart(product)}
          >
            Add To Cart
          </button>
        </Fade>
      </div>

      <div className="product-card__footer">
        <p className="product-card__name">{name}</p>
        <div className="product-card__info">
          <span className="product-card__price">${price}</span>
          <Rating readonly allowFraction initialValue={rating} size={18} />
          {commentsCount && (
            <span className="product-card__comments-count">{`"(${commentsCount})"`}</span>
          )}
        </div>
      </div>
    </div>
  );
};
