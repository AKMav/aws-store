import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { ICartProduct } from "@/types/products";
import CrossIcon from "@/assets/icons/cross.svg";
import { getFixedPrice } from "@/decorators/priceFormatters";
import { ProductNameCell } from "../ProductNameCell/ProductNameCell";
import {
  removeProductFromCart,
  cartProductQuantityChange,
} from "@/store/buyerCart";
import "./style.scss";

interface IProps {
  products: ICartProduct[];
}

export const ProductsTable = ({ products }: IProps) => {
  const dispatch = useDispatch();

  const removeProduct = (id: number) => {
    dispatch(removeProductFromCart(id));
  };

  const changeQuantity = (event: ChangeEvent<HTMLInputElement>, id: number) => {
    const quantity = Number((event.target as HTMLInputElement).value);

    if (quantity <= 0) return;
    dispatch(cartProductQuantityChange({ id, quantity }));
  };

  return (
    <table className="cart-products-table">
      <thead className="cart-products-table__head">
        <tr className="cart-products-table__row cart-products-table__row_head">
          <th className="cart-products-table__cell cart-products-table__cell_head">
            Products
          </th>
          <th className="cart-products-table__cell cart-products-table__cell_head">
            Price
          </th>
          <th className="cart-products-table__cell cart-products-table__cell_head">
            Quantity
          </th>
          <th className="cart-products-table__cell cart-products-table__cell_head">
            Subtotal
          </th>
        </tr>
      </thead>

      <tbody className="cart-products-table__body">
        {products.map(
          ({ id, name, price, quantity, mainPicture, priceWithDiscount }) => (
            <tr
              className="cart-products-table__row cart-products-table__row_body"
              key={id}
            >
              <td className="cart-products-table__cell cart-products-table__cell_body">
                <ProductNameCell productName={name} pictureSrc={mainPicture} />
              </td>
              <td className="cart-products-table__cell cart-products-table__cell_body">
                <span className="cell-text">${priceWithDiscount || price}</span>
              </td>
              <td className="cart-products-table__cell cart-products-table__cell_body">
                <span className="cell-text">
                  <input
                    type="number"
                    value={quantity}
                    className="number-input"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      changeQuantity(e, id)
                    }
                  />
                </span>
              </td>
              <td className="cart-products-table__cell cart-products-table__cell_body">
                <div className="flex-cell">
                  <span className="cell-text">
                    ${getFixedPrice((priceWithDiscount || price) * quantity, 2)}
                  </span>
                  <button
                    type="button"
                    className="cart-products-table__remove-button"
                    onClick={() => removeProduct(id)}
                  >
                    <img
                      src={CrossIcon}
                      alt="remove button icon"
                      width={8}
                      height={8}
                    />
                  </button>
                </div>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};
