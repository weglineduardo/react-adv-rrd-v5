import { useProduct } from "../hooks/useProduct";
import styles from "../styles/styles.module.css";
import { createContext, CSSProperties, ReactElement } from "react";
import { ProductContextProps, Product } from "../interfaces/interface";
//usamos el Context para que los componentes hijos tengan comunicacion con los componentes padres o dicho de otra manera este disponibles en cualquier parte de la aplicacion.
export const ProductContext = createContext({} as ProductContextProps);
// usamos Provider en el return ya que alli tenemos todos los hijos que lo necesitan
const { Provider } = ProductContext;

//interface sin utilidad por que usamos useContext
//interface ProductButtosProps {
//  increseaBy: (value: number) => void;
//  counter: number;
//}
export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}

export const ProductCard = ({ children, product, className, style }: Props) => {
  const { counter, increseaBy } = useProduct();

  return (
    //al value de Provider le pasamos componente que necesitamos tener disponibles en el resto de la aplicacion
    <Provider value={{ counter, increseaBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};

//agregamos propiedad que apuntan al componente
//ProductCard.Image = ProductImage;
//ProductCard.Title = ProductTitle;
//ProductCard.Buttons = ProductButtons;
