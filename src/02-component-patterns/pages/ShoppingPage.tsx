import {
  ProductImage,
  ProductButtons,
  ProductTitle,
  ProductCard,
} from "../components";

import style from "../styles/styles.module.css";

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
        <div className={style.shoppingPage}></div>

        <ProductCard product={product}>
          <ProductImage img={product.img} />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductCard.Image img={product.img} />
          <ProductCard.Title title={product.title} />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </>
  );
};
