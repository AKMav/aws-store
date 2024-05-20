import { IProductCard } from "@/types/products";
import { WishProductCard } from "../WishProductCard/WishProductCard";
import "./style.scss";

interface IProps {
  list: IProductCard[];
  addProductToBuyerCart: (product: IProductCard) => void;
  removeFromWishlist: (id: IProductCard["id"]) => void;
}

export const WishProductList = ({
  list,
  addProductToBuyerCart,
  removeFromWishlist,
}: IProps) => {
  return (
    <ul className="wish-product-list">
      {list.map((product) => (
        <li className="wish-product-list__item" key={product.id}>
          <WishProductCard
            product={product}
            onAddToCart={addProductToBuyerCart}
            onRemoveFromWishlist={removeFromWishlist}
          />
        </li>
      ))}
    </ul>
  );
};
