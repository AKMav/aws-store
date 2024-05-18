import { Rating } from "react-simple-star-rating";
import "./style.scss";

export const ProductDetails = () => {
  return (
    <div className="product-details">
      <h2 className="product-details__title">Havic HV G-92 Gamepad</h2>
      <div className="product-details__info-row">
        <div className="product-details__rating-row">
          <Rating readonly allowFraction initialValue={5} size={20} />
          <span className="product-details__reviews">{`(${150} Reviews)`}</span>
        </div>

        <span className="product-details__stock-status">In Stock</span>
      </div>
      <h3 className="product-details__price">$192.00</h3>
      <p className="product-details__description">
        PlayStation 5 Controller Skin High quality vinyl with air channel
        adhesive for easy bubble free install & mess free removal Pressure
        sensitive.
      </p>
    </div>
  );
};
