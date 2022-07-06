import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

//no exporto estas props por que solo se usan aqui
//cuando tenemso mas de una propiedad como parametros es recomendable que
//hagamos una interface
export interface Props {
  title?: string;
  className?: string;
  style?: CSSProperties;
}
export const ProductTitle = ({ title, className, style }: Props) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {title ? title : product.title}
    </span>
  );
};
