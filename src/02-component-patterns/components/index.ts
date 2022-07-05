import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductButtons } from "./ProductButtons";
import { ProductCardHOCProps } from "../interfaces/interface";

export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";
export { ProductButtons } from "./ProductButtons";

//expandimos y asignamos nueva propiedades
export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export default ProductCard;
