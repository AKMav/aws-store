import "./style.scss";
import { Container } from "react-bootstrap";
import { BenefitsList } from "@/components";
import { MainHeader } from "./components/MainHeader/MainHeader";
import { ProductsByCategory } from "./components/ProductsByCategory/ProductsByCategory";
import { benefits } from "./constants";

export const HomePage = () => {
  return (
    <div className="home-page">
      <Container>
        <MainHeader />
        <ProductsByCategory />
        <BenefitsList benefits={benefits} />
      </Container>
    </div>
  );
};

export default HomePage;
