import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import "./featuredproduct.styles.scss";

import { CartContext } from "../../context/CartContext";
import { isInCart } from "../../Helpers";

const FeaturedProduct = (props) => {
  const { title, imageUrl, price, history, id, description } = props;

  const product = { title, imageUrl, price, id, description };

  const { increaseQuantity, addProduct, cartItems } = useContext(CartContext);
  const itemInCart = isInCart(product, cartItems);

  return (
    <>
      <div className="featured-product">
        <div className="featured-image">
          <img
            src={imageUrl}
            alt="product"
            onClick={() => history.push(`/product/${id}`)}
          />
        </div>
        <div className="name-price">
          <h3>{title}</h3>
          <p>$ {price}</p>
          {!itemInCart && (
            <button
              onClick={() => addProduct(product)}
              className="button is-black nomad-btn"
            >
              ADD TO CART
            </button>
          )}
          {itemInCart && (
            <button
              onClick={() => increaseQuantity(product)}
              id="btn-white-outline"
              className="button is-white nomad-btn"
            >
              ADD MORE
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default withRouter(FeaturedProduct);
