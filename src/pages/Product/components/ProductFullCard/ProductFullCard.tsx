// import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { DeliverySection } from "../DeliverySection/DeliverySection";
import { ProductDetails } from "../ProductDetails/ProductDetails";
import { ProductActions } from "../ProductActions/ProductActions";

import "./style.scss";

interface IProps {
  id?: string;
}

export const ProductFullCard = ({ id }: IProps) => {
  console.log(id);

  return (
    <Container className="product-full-card">
      <Row className="product-full-card__row">
        <Col md={7} className="product-full-card__col">
          <div className="product-full-card__picture"></div>
        </Col>
        <Col className="product-full-card__col">
          <ProductDetails />
          <ProductActions />
          <DeliverySection />
        </Col>
      </Row>
    </Container>
  );
};
