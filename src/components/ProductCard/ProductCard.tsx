import "./style.scss";

export const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-card__main">
        <img width={190} height={180} />
      </div>

      <div className="product-card__footer">
        <p className="product-card__name">Breed Dry Dog Food</p>
        <div className="product-card__info">
          <span className="product-card__price">$100</span>
          <div className="product-card__rate"></div>
          <span className="product-card__comments-count">{"(65)"}</span>
        </div>
      </div>
    </div>
  );
};
