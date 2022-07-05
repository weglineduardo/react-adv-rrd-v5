import { useContext } from "react";
import { ProductContext } from "../components/ProductCard";
import style from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

export const ProductImage = ({ img = "" }) => {
  const { product } = useContext(ProductContext);

  let imageToShow: string;

  if (img) {
    imageToShow = img;
  } else if (product.img) {
    imageToShow = product.img;
  } else {
    imageToShow = noImage;
  }

  return (
    <img className={style.productImg} src={imageToShow} alt={"product img"} />
  );
};
