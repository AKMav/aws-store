import React from "react";
import "./style.scss";
import iphoneImage from "@/assets/images/iphone-banner.png";
import appleIcon from "@/assets/icons/apple.svg";
import arrow from "@/assets/icons/arrow-right.svg";

export const BannerItem = () => {
  const itemClickHandler = () => {
    console.log("add item to cart");
  };

  return (
    <div className="banner-item">
      <div className="banner-item__info">
        <div className="banner-item__info-row">
          <p className="banner-item__model-title">
            <img src={appleIcon} />
            <span>iPhone 14 Series</span>
          </p>
        </div>
        <div className="banner-item__info-row">
          <h2 className="banner-item__title">Up to 10% off Voucher</h2>
        </div>
        <a
          className="banner-item__link"
          type="button"
          onClick={itemClickHandler}
        >
          Shop Now
          <img src={arrow} alt="arrow-right-icon" />
        </a>
      </div>
      <img
        height="345px"
        src={iphoneImage}
        alt="iphone"
        className="banner-item__image"
      />
    </div>
  );
};
