import { IProductCard } from "@/types/products";
import { RoundButton } from "@/components/UIKit";
import DeleteIcon from "@/assets/icons/delete-icon.svg";
import CartIcon from "@/assets/icons/cart.svg";
import "./style.scss";

interface IProps {
  product: IProductCard;
  onAddToCart: (item: IProductCard) => void;
  onRemoveFromWishlist: (id: IProductCard["id"]) => void;
}

export const WishProductCard = ({
  product,
  onAddToCart,
  onRemoveFromWishlist,
}: IProps) => {
  const {
    id,
    name,
    price,
    mainPicture,
    discountPercentage,
    priceWithDiscount,
  } = product;

  return (
    <div className="wish-product-card">
      <div className="wish-product-card__main">
        {discountPercentage && (
          <span className="wish-product-card__tag wish-product-card__tag_discount">
            -{Math.round(discountPercentage)}%
          </span>
        )}
        <img
          width={190}
          height={180}
          draggable="false"
          src={mainPicture}
          alt={`picture of ${name}`}
          className="wish-product-card__image"
        />

        <div className="wish-product-card__buttons">
          <RoundButton clickHandle={() => onRemoveFromWishlist(id)}>
            <img src={DeleteIcon} width={24} height={24} draggable="false" />
          </RoundButton>
        </div>

        <button
          className="wish-product-card__cart-button"
          onClick={() => onAddToCart(product)}
        >
          <img src={CartIcon} draggable="false" />
          Add To Cart
        </button>
      </div>

      <div className="wish-product-card__footer">
        <p className="wish-product-card__name">{name}</p>
        <div className="wish-product-card__info">
          {priceWithDiscount ? (
            <span className="wish-product-card__price">
              ${priceWithDiscount}
              <span className="wish-product-card__price_discount">
                ${price}
              </span>
            </span>
          ) : (
            <span className="wish-product-card__price">${price}</span>
          )}
        </div>
      </div>
    </div>
  );
};
