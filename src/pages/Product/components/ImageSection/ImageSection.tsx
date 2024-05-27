import "./style.scss";

interface IProps {
  mainImage: string;
  images: string[];
}

export const ImageSection = ({ mainImage, images }: IProps) => {
  return (
    <div className="full-product-images">
      <div className="full-product-images__row">
        {images.map((imageSrc, index) => (
          <div
            key={index}
            className="full-product-images__image-container mini"
          >
            <img src={imageSrc} alt="product mini image" draggable={false} />
          </div>
        ))}
      </div>
      <div className="full-product-images__image-container">
        <img src={mainImage} alt="product main image" draggable={false} />
      </div>
    </div>
  );
};
