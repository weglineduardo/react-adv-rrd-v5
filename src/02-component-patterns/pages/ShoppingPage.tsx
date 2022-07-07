import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";
import { useShoppingCart } from "../hooks/useShoppingCart";

import "../styles/custom-styles.css";
import { products } from "../data/products";

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

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
        onChange={onProductCountChange}
        value={shoppingCart[product.id]?.count || 0}
      >
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
      </ProductCard>
    </div>
  );
};
