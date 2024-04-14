import "./style.scss";
import { Container } from "react-bootstrap";
import { ProductsList } from "@/components";
import { MainHeader } from "./components/MainHeader/MainHeader";

export const HomePage = () => {
  return (
    <div className="home-page">
      <Container>
        <MainHeader />
        <ProductsList classes="own-products" />
      </Container>
    </div>
  );
};

export default HomePage;
