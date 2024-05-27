import { Rating } from "react-simple-star-rating";
import { AvailabilityStatus } from "@/api/products";
import "./style.scss";

interface IProps {
  title: string;
  description: string;
  rating: number;
  reviews: number;
  price: number;
  availabilityStatus: AvailabilityStatus;
}

export const ProductDetails = ({
  title,
  rating,
  reviews,
  price,
  description,
  availabilityStatus,
}: IProps) => {
  const formatPrice = (price: number) => parseFloat(`${price}`).toFixed(2);

  return (
    <div className="product-details">
      <h2 className="product-details__title">{title}</h2>
      <div className="product-details__info-row">
        <div className="product-details__rating-row">
          <Rating readonly allowFraction initialValue={rating} size={20} />
          <span className="product-details__reviews">{`(${reviews} Reviews)`}</span>
        </div>
        <span
          className={`product-details__stock-status ${
            availabilityStatus === "In Stock" ? "active" : "disabled"
          }`}
        >
          {availabilityStatus}
        </span>
      </div>
      <h3 className="product-details__price">${formatPrice(price)}</h3>
      <p className="product-details__description">{description}</p>
    </div>
  );
};
