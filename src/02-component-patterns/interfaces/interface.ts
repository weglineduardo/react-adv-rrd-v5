import { ReactElement } from "react";
import { Props as ProductButtosProps } from "../components/ProductButtons";
import { Props as PropsProductCardHOC } from "../components/ProductCard";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductTitleProps } from "../components/ProductTitle";

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
}
export interface Product {
  id: string;
  title: string;
  img?: string;
}

//tenemos que tipar el context con una interface para evitar que sea generico. Queremos tener control de lo que se pueda pasar. Tambien ayuda a el mantenimiento y la lectura del codigo para otros desarrolladores

export interface ProductContextProps {
  counter: number;
  increseaBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ children, product }: PropsProductCardHOC): JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Buttons: (Props: ProductButtosProps) => JSX.Element;
}
