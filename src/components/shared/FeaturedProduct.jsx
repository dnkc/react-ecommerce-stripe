import React from "react";
import { withRouter } from "react-router-dom";
import "./featuredproduct.styles.scss";

const FeaturedProduct = (props) => {
  const { title, imageUrl, price, history, id } = props;

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
          <button className="button is-black nomad-btn">ADD TO CART</button>
        </div>
      </div>
    </>
  );
};

export default withRouter(FeaturedProduct);
