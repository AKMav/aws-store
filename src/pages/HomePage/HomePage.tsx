import React from "react";
import "./style.scss";
import { Container } from "react-bootstrap";
import { MainHeader } from "./components/MainHeader/MainHeader";

export const HomePage = () => {
  return (
    <div className="home-page">
      <Container>
        <MainHeader />
      </Container>
    </div>
  );
};

export default HomePage;