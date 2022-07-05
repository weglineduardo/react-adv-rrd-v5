import { useContext } from "react";
import style from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

export const ProductButtons = () => {
  //usamos useContext y asi evitamos enviar parametros a ProductButtons
  const { counter, increseaBy } = useContext(ProductContext);

  return (
    <div className={style.buttonsContainer}>
      <button className={style.buttonMinus} onClick={() => increseaBy(-1)}>
        -
      </button>

      <div className={style.countLabel}> {counter} </div>

      <button className={style.buttonAdd} onClick={() => increseaBy(+1)}>
        +
      </button>
    </div>
  );
};
