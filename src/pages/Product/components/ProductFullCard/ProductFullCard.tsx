import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { getProductById } from "@/services/products";
import { formatFetchedProductForFullCard } from "@/decorators/productFormatters";
import { DeliverySection } from "../DeliverySection/DeliverySection";
import { ProductDetails } from "../ProductDetails/ProductDetails";
import { ProductActions } from "../ProductActions/ProductActions";
import { IFullProduct } from "@/types/products";
import { ProductError } from "../ProductError/ProductError";
import "./style.scss";

interface IProps {
  id?: string;
}

export const ProductFullCard = ({ id }: IProps) => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<IFullProduct | null>(null);

  const getProduct = async (id: string | number) => {
    try {
      setLoading(true);
      const { data } = await getProductById(id);
      const product = formatFetchedProductForFullCard(data);
      setProduct(product);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getProduct(id);
    }
  }, [id]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <>
      {loading ? (
        <div className="product-full-card__spinner-wrapper">
          <Spinner
            className="product-full-card__spinner"
            animation="grow"
            variant="secondary"
          />
        </div>
      ) : product ? (
        <Container className="product-full-card">
          <Row className="product-full-card__row">
            <Col md={7} className="product-full-card__col">
              <div className="product-full-card__picture"></div>
            </Col>
            <Col className="product-full-card__col">
              <ProductDetails
                title={product?.name}
                rating={product.rating}
                reviews={product.commentsCount || 0}
                isInStock={product.stock}
                price={product.priceWithDiscount || product.price}
                description={product.description}
              />
              <ProductActions inStock={product.stock} />
              <DeliverySection />
            </Col>
          </Row>
        </Container>
      ) : (
        <ProductError />
      )}
    </>
  );
};
