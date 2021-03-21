import React, { useContext, useEffect } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { CartContext } from "../../context/CartContext";
const Layout = ({ children }) => {
  const { itemCount } = useContext(CartContext);
  useEffect(() => {}, [itemCount]);
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
