import React, { useContext } from "react";
import "./carticon.styles.scss";
import shoppingBag from "../../assets/shopping-bag.png";
import { CartContext } from "../../context/CartContext";

const CartIcon = () => {
  const { itemCount, cartItems } = useContext(CartContext);
  console.log("cartItems:", cartItems);
  return (
    <div className="cart-container">
      <img src={shoppingBag} alt="shopping cart icon" />
      {itemCount > 0 ? <span className="cart-count"> {itemCount}</span> : null}
    </div>
  );
};

export default CartIcon;
