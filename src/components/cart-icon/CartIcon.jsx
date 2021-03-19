import React from "react";
import "./carticon.styles.scss";
import shoppingBag from "../../assets/shopping-bag.png";

const CartIcon = () => {
  return (
    <div className="cart-container">
      <img src={shoppingBag} alt="shopping cart icon" />
      <span className="cart-count"> 5</span>
    </div>
  );
};

export default CartIcon;
