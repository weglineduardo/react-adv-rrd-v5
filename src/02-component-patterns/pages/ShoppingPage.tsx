import {
  ProductImage,
  ProductButtons,
  ProductTitle,
  ProductCard,
} from "../components";

import style from "../styles/styles.module.css";
import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "Coffee Mug whats ?",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <>
      <div>
        <h1>Shopping Page</h1>
        <br />
        <div className={style.shoppingPage}>
          <ProductCard product={product} className={"bg-dark"}>
            <ProductImage img={product.img} className={"custom-image"} />
            <ProductTitle className={"text-white text-align text-bond"} />
            <ProductButtons className={"custom-buttons"} />
          </ProductCard>

          <ProductCard
            product={product}
            className={"bg-dark"}
            style={{
              boxShadow: "10px 10px 10px rgba(0,0,0,0.5)",
            }}
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

          <ProductCard
            product={product}
            style={{
              backgroundColor: "#70D1F8",
            }}
          >
            <ProductCard.Image
              img={product.img}
              style={{
                backgroundColor: "#70D1F8",
                boxShadow: "10px 10px 10px rgba(0,0,0,0.5)",
              }}
            />
            <ProductCard.Title
              title={product.title}
              style={{
                backgroundColor: "red",
              }}
            />
            <ProductCard.Buttons
              style={{
                color: " rgb(85, 141, 21)",
                borderColor: "rgb(20, 20, 175)",
                justifyContent: "end",
              }}
            />
          </ProductCard>
        </div>
      </div>
    </>
  );
};
