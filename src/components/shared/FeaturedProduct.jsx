import React from "react";
import "./featuredproduct.styles.scss";

const FeaturedProduct = (product) => {
  const { title, imageUrl, price } = product;
  return (
    <>
      <div className="featured-product">
        <div className="featured-image">
          <img src={imageUrl} alt="product" />
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

export default FeaturedProduct;
