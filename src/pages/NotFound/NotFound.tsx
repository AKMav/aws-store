import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./style.scss";
import { NavLink } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="not-found">
      <Container className="not-found__container">
        <Row className="not-found__row">
          <Col>
            <h1 className="not-found__title">404 Not Found</h1>
            <h3 className="not-found__subtitle">
              Your visited page not found. You may go home page.
            </h3>
          </Col>
        </Row>
        <Row className="not-found__row">
          <Col>
            <Button variant="danger" className="not-found__button">
              <NavLink to="/" className="home-link">
                Back to home page
              </NavLink>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
