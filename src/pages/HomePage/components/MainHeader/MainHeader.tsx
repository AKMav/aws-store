import React from "react";
import "./style.scss";
import { Container, Row, Col } from "react-bootstrap";
import { CategoriesList } from "../CategoriesList/CategoriesList";
import { CarouselBanner } from "../CarouselBanner/CarouselBanner";

export const MainHeader = () => {
  return (
    <div className="main-header">
      <Container className="main-header__container">
        <Row>
          <Col xs={4} className="main-header__col">
            <CategoriesList />
          </Col>
          <Col className="main-header__col">
            <CarouselBanner />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
