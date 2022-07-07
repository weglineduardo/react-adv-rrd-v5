import { ProductCard } from "../components";

import style from "../styles/styles.module.css";
import "../styles/custom-styles.css";

import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";

export const ShoppingPageRoto = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();
  return (
    <>
      <div className="row">
        <h1>Shopping Page</h1>
        <br />

        <div className={style.shoppingPage}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              className={"bg-dark"}
              style={{
                boxShadow: "10px 10px 10px rgba(0,0,0,0.5)",
              }}
              value={shoppingCart[product.id]?.count || 0}
              onChange={onProductCountChange}
            >
              <ProductCard.Image
                img={product.img}
                className={"custom-image"}
                style={{
                  boxShadow: "10px 10px 10px rgba(0,0,0,0.5)",
                }}
              />
              <ProductCard.Title
                title={product.title}
                className={"text-white text-align text-bond"}
                style={{
                  boxShadow: "10px 10px 10px rgba(0,0,0,0.5)",
                }}
              />
              <ProductCard.Buttons
                className={"custom-buttons"}
                style={{
                  boxShadow: "10px 10px 10px rgba(0,0,0,0.5)",
                }}
              />
            </ProductCard>
          ))}
        </div>

        <div className="shopping-card">
          {Object.entries(shoppingCart).map(([key, product]) => (
            <ProductCard
              key={key}
              product={product}
              className={"bg-dark"}
              style={{
                boxShadow: "10px 10px 10px rgba(0,0,0,0.5)",
                width: "100px",
              }}
              value={product.count}
              onChange={onProductCountChange}
            >
              <ProductCard.Image
                img={product.img}
                className={"custom-image"}
                style={{
                  boxShadow: "10px 10px 10px rgba(0,0,0,0.5)",
                }}
              />

              <ProductCard.Buttons
                className={"custom-buttons"}
                style={{
                  boxShadow: "10px 10px 10px rgba(0,0,0,0.5)",
                  display: "flex",
                  justifyContent: "center",
                }}
              />
            </ProductCard>
          ))}
        </div>
        {/*        <div>
          <code>{JSON.stringify(shoppingCard, null, 5)}</code>
              </div>*/}
      </div>
    </>
  );
};
