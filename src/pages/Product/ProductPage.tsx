import { useParams } from "react-router-dom";
import { IRouteParams } from "@/types/routeParams";
import { ProductFullCard } from "./components";
import "./style.scss";

export const ProductPage = () => {
  const { productId } = useParams<IRouteParams["ProductId"]>();

  return (
    <div className="product-page">
      <ProductFullCard id={productId} />
    </div>
  );
};

export default ProductPage;
