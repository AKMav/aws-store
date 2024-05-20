import "./style.scss";
import { Container } from "react-bootstrap";
import { BenefitsList } from "@/components";
import { MainHeader } from "./components/MainHeader/MainHeader";
import { ProductsByCategory } from "./components/ProductsByCategory/ProductsByCategory";

export const HomePage = () => {
  return (
    <div className="home-page">
      <Container>
        <MainHeader />
        <ProductsByCategory />
        <BenefitsList />
      </Container>
    </div>
  );
};

export default HomePage;
