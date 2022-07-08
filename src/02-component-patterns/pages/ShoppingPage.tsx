import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";

import "../styles/custom-styles.css";
import { products } from "../data/products";

export const ShoppingPage = () => {
  const product = products[0];
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark text-white"
        style={{
          boxShadow: "10px 10px 10px rgba(0,0,0,0.5)",
        }}
        initialValues={{
          count: 1,
          maxCount: 13,
        }}
      >
        {/* ojo que tenemos funciones que devuelve objetos que deben 
        encerrarce entre () y no entre {} */}

        {({
          count,
          maxCount,
          reset,
          increaseBy,
          isMaxCountReached,
          product,
        }) => (
          <>
            <ProductImage
              className="custom-image"
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
            />
            <ProductTitle
              className="text-bold"
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
            />
            <ProductButtons
              className="custom-buttons"
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
            />
            <button onClick={reset}> Reset</button>
            <button onClick={() => increaseBy(-3)}> -3</button>

            {!isMaxCountReached && (
              <button onClick={() => increaseBy(+3)}> +3</button>
            )}
            <span>
              -----{count} ------ {maxCount}
            </span>
          </>
        )}
        {/* {(args) => (
          <>
            <ProductImage
              className="custom-image"
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
            />
            <ProductTitle
              className="text-bold"
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
            />
            <ProductButtons
              className="custom-buttons"
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
            />
            <button onClick={args.reset}> reset</button>
          </>
        )} */}
      </ProductCard>
    </div>
  );
};
