import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Layout from "../../shared/Layout";
import CartItem from "./CartItem";
import Total from "./Total";
import "./cartpage.styles.scss";

const CartPage = () => {
  const {
    cartItems,
    itemCount,
    total,
    increaseQuantity,
    decreaseQuantity,
    removeProduct,
  } = useContext(CartContext);
  const funcs = { increaseQuantity, decreaseQuantity, removeProduct };
  return (
    <Layout>
      <>
        <h1>Cart</h1>
        {cartItems < 1 ? (
          <div className="empty-cart">Your Cart is empty</div>
        ) : (
          <>
            <div className="cart-page">
              <div className="cart-item-container">
                {cartItems.map((item) => (
                  <CartItem {...item} key={item.id} {...funcs} />
                ))}
              </div>
              <Total itemCount={itemCount} total={total} />
            </div>
          </>
        )}
      </>
    </Layout>
  );
};

export default CartPage;
