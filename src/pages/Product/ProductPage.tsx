import "./style.scss";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { IRouteParams } from "@/types/routeParams";

export const ProductPage = () => {
  const { productId } = useParams<IRouteParams["ProductId"]>();

  return (
    <div className="home-page">
      <Container>
        <h1>Product id = {productId}</h1>
      </Container>
    </div>
  );
};

export default ProductPage;
