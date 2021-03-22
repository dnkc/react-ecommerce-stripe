import { Link } from "react-router-dom";
import "./header.styles.scss";
import React, { useContext } from "react";
import { auth } from "../../firebase";
import { UserContext } from "../../context/UserContext";
import CartIcon from "../cart-icon/CartIcon";

const Header = () => {
  const { user } = useContext(UserContext);
  console.log("user", user);
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
        {!user && (
          <li>
            <Link to="/sign-in">Sign In</Link>
          </li>
        )}
        {user && <li onClick={() => auth.signOut()}>Sign Out</li>}
        {!user && (
          <li>
            <Link to="/sign-up">Sign Up</Link>
          </li>
        )}
      </ul>
      <Link to="/cart">
        {" "}
        <CartIcon />
      </Link>
    </nav>
  );
};

export default Header;
