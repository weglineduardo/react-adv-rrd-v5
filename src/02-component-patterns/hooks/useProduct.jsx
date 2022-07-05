import { useState } from "react";

export const useProduct = () => {
  const [counter, setCounter] = useState(0);

  const increseaBy = (value) => {
    //imcrementa el valor siempre que no sea menor a cero
    setCounter((prev) => Math.max(prev + value, 0));
  };

  return {
    counter,
    increseaBy,
  };
};
