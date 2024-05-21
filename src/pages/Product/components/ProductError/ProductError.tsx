import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { BackHomeButton } from "@/components/shared";
import "./style.scss";

export const ProductError = () => {
  const navigate = useNavigate();

  return (
    <div className="full-product-error">
      <h1 className="full-product-error__title">Product is not found.</h1>
      <p className="full-product-error__subtitle">
        Please reset page or chose other product.
      </p>
      <div className="full-product-error__actions">
        <Button
          variant="success"
          className="full-product-error__button"
          onClick={() => navigate(0)}
        >
          Reset page
        </Button>
        <BackHomeButton />
      </div>
    </div>
  );
};
