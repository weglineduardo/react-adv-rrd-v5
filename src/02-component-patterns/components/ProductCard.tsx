import { useProduct } from "../hooks/useProduct";
import style from "../styles/styles.module.css";
import { createContext } from "react";
import { ProductContextProps, ProductCardProps } from "../interfaces/interface";
//usamos el Context para que los componentes hijos tengan comunicacion con los componentes padres o dicho de otra manera este disponibles en cualquier parte de la aplicacion.
export const ProductContext = createContext({} as ProductContextProps);
// usamos Provider en el return ya que alli tenemos todos los hijos que lo necesitan
const { Provider } = ProductContext;

//interface sin utilidad por que usamos useContext
//interface ProductButtosProps {
//  increseaBy: (value: number) => void;
//  counter: number;
//}

export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, increseaBy } = useProduct();

  return (
    //al value de Provider le pasamos componente que necesitamos tener disponibles en el resto de la aplicacion
    <Provider value={{ counter, increseaBy, product }}>
      <div className={style.productCard}>{children}</div>
    </Provider>
  );
};

//agregamos propiedad que apuntan al componente
//ProductCard.Image = ProductImage;
//ProductCard.Title = ProductTitle;
//ProductCard.Buttons = ProductButtons;
