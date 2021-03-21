import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Layout from "../shared/Layout";
// import StripeCheckout from "./stripeCheckout/StripeCheckout";
import ShippingAddress from "./customCheckout/ShippingAddress";
import "./checkout.styles.scss";

const Checkout = () => {
  const { itemCount, total } = useContext(CartContext);
  return (
    <Layout>
      <div className="checkout">
        <h2>Checkout Sumamry</h2>
        <h3>{`Total Items: ${itemCount}`}</h3>
        <h4>{`Amount to Pay: $ ${total}`}</h4>
        {/* <StripeCheckout /> */}
      </div>
    </Layout>
  );
};

export default Checkout;
