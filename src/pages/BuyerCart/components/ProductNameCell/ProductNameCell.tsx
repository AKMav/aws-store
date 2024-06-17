import "./style.scss";

interface IProps {
  pictureSrc: string;
  productName: string;
}

export const ProductNameCell = ({ pictureSrc, productName }: IProps) => {
  return (
    <div className="product-name-cell">
      <img
        className="product-name-cell__picture"
        src={pictureSrc}
        alt={productName}
        draggable="false"
        width={64}
        height={64}
      />
      <span className="product-name-cell__text">{productName}</span>
    </div>
  );
};
