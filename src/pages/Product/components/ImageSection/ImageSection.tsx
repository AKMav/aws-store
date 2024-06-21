import { useState } from "react";
import "./style.scss";

interface IProps {
  mainImage: string;
  images: string[];
}

export const ImageSection = ({ mainImage, images }: IProps) => {
  const [allImages, setAllImages] = useState<string[]>(images);
  const [mainPic, setMainPic] = useState<string>(mainImage);

  const changeMainPic = (newMainPic: string) => {
    const oldMainPic = mainPic;
    const images = allImages.filter((image) => image !== newMainPic);
    setAllImages([...images, oldMainPic]);
    setMainPic(newMainPic);
  };

  return (
    <div className="full-product-images">
      <div className="full-product-images__row">
        {allImages.map((imageSrc, index) => (
          <div
            key={index}
            className="full-product-images__image-container mini"
            onClick={() => changeMainPic(imageSrc)}
          >
            <img src={imageSrc} alt="product mini image" draggable={false} />
          </div>
        ))}
      </div>
      <div className="full-product-images__image-container full-product-images_main">
        <img src={mainPic} alt="product main image" draggable={false} />
      </div>
    </div>
  );
};
