import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Routes } from "@/routes";
import { getProductById } from "@/services/products";
import { formatFetchedProductForFullCard } from "@/decorators/productFormatters";
import { IFullProduct } from "@/types/products";
import { DeliverySection } from "../DeliverySection/DeliverySection";
import { ProductDetails } from "../ProductDetails/ProductDetails";
import { ProductActions } from "../ProductActions/ProductActions";
import { ProductError } from "../ProductError/ProductError";
import { ImageSection } from "../ImageSection/ImageSection";
import { useWishlistActions, useCartActions } from "@/hooks";
import "./style.scss";

interface IProps {
  id?: string;
}

export const ProductFullCard = ({ id }: IProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<IFullProduct | null>(null);

  // wishlist action handle
  const {
    onProductAddToWishlist,
    onProductRemoveFromWishlist,
    isProductInWishlist,
  } = useWishlistActions();

  // cart actions handle
  const { onProductAddToCartWithQuantity } = useCartActions();

  const onBuyNow = (quantity: number) => {
    if (!product) return;

    onProductAddToCartWithQuantity({ product, quantity });
    navigate(`/${Routes.Cart}`);
  };

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

  const toggleWishlist = () => {
    if (!product) return;

    if (isProductInWishlist(id)) {
      onProductRemoveFromWishlist(product.id);
    } else {
      onProductAddToWishlist(product);
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
              <ImageSection
                images={product.images}
                mainImage={product.mainPicture}
              />
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
              <ProductActions
                inStock={product.stock}
                inWishlist={isProductInWishlist(id)}
                toggleWishlist={toggleWishlist}
                onBuyNow={onBuyNow}
              />
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
