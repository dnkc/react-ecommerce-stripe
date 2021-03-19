import { Link } from "react-router-dom";
import "./header.styles.scss";
import React from "react";
import CartIcon from "../cart-icon/CartIcon";

const Header = () => {
  return (
    <nav className="nav-menu container">
      <div className="logo">
        <Link to="/">DNKC</Link>
      </div>
      <ul>
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/shop">Shop</Link>
        </li>
      </ul>
      <CartIcon />
    </nav>
  );
};

export default Header;
