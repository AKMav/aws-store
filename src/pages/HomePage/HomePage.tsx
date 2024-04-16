import "./style.scss";
import { Container } from "react-bootstrap";
import { MainHeader } from "./components/MainHeader/MainHeader";
import { ProductsByCategory } from "./components/ProductsByCategory/ProductsByCategory";

export const HomePage = () => {
  return (
    <div className="home-page">
      <Container>
        <MainHeader />
        <ProductsByCategory classes="own-products" />
      </Container>
    </div>
  );
};

export default HomePage;
