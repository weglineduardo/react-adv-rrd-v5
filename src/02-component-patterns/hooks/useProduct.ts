import { useEffect, useRef, useState } from "react";
import { onChangeArgs, Product, InitialValues } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  maxCount?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  maxCount,
  initialValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);

  //aqui controlamos si el componente fue montado para evitar que el useEffect de abajo se ejecute dos veces
  const idMounted = useRef(false);

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);

    //este if evalue si existe initialValues y maxCount tiene un valor
    if (initialValues?.maxCount) {
      //aqui tomamaos el minimo valor entre los dos, osea entre newValue
      // y initialValues.maxCount y se lo asignamos a newValue
      newValue = Math.min(newValue, initialValues.maxCount);
    }
    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };
  const reset = () => {
    setCounter(initialValues?.count || value);
  };
  useEffect(() => {
    if (!idMounted.current) {
      return;
    }

    setCounter(value);
  }, [value]);

  useEffect(() => {
    idMounted.current = true;
  }, []);

  return {
    counter,
    isMaxCountReached:
      !!initialValues?.count && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,
    increaseBy,
    reset,
  };
};
