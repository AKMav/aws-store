import React from "react";
import { Carousel } from "react-bootstrap";
import { BannerItem } from "../BannerItem/BannerItem";

export const CarouselBanner = () => {
  return (
    <Carousel controls={false}>
      <Carousel.Item>
        <BannerItem />
      </Carousel.Item>
      <Carousel.Item>
        <BannerItem />
      </Carousel.Item>
      <Carousel.Item>
        <BannerItem />
      </Carousel.Item>
    </Carousel>
  );
};
