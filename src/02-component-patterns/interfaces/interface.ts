import { ReactElement } from "react";

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
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: ({ title }: { title?: string }) => JSX.Element;
  Image: ({ img }: { img?: string }) => JSX.Element;
  Buttons: () => JSX.Element;
}
