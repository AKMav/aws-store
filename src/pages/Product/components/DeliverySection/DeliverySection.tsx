import DeliveryIcon from "@/assets/icons/delivery-icon.svg";
import ReturnIcon from "@/assets/icons/return-icon.svg";
import "./style.scss";

export const DeliverySection = () => {
  return (
    <div className="delivery">
      <div className="delivery__section">
        <img
          width={40}
          height={40}
          src={DeliveryIcon}
          className="delivery-icon"
        />
        <div>
          <h4>Free Delivery</h4>
          <p>
            <a href="#">Enter your postal code for Delivery Availability</a>
          </p>
        </div>
      </div>
      <div className="delivery__section">
        <img width={40} height={40} src={ReturnIcon} />
        <div>
          <h4>Return Delivery</h4>
          <p>
            Free 30 Days Delivery Returns. <a href="#">Details</a>
          </p>
        </div>
      </div>
    </div>
  );
};
