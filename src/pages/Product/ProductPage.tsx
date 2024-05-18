import "./style.scss";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { IRouteParams } from "@/types/routeParams";
import { ProductFullCard } from "./components";

export const ProductPage = () => {
  const { productId } = useParams<IRouteParams["ProductId"]>();

  return (
    <div className="product-page">
      <Container>
        <ProductFullCard id={productId} />
      </Container>
    </div>
  );
};

export default ProductPage;
