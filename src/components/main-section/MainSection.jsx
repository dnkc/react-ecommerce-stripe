import React from "react";
import "./mainsection.styles.scss";

import studioBag from "../../assets/studio-bag.png";

const MainSection = ({ history }) => {
  return (
    <>
      <div className="main-section-container">
        <div className="main-section-middle">
          <div className="ms-m-image">
            <img src={studioBag} alt="studio bag" />
          </div>
          <div className="ms-m-description">
            <h2>Designed for fashion. Crafted for sport.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              minima qui eum natus esse consequuntur numquam tempore! Nam minus
              omnis facilis similique est accusamus reprehenderit? Natus modi
              voluptates repudiandae? Culpa.
            </p>
            <button
              className="button is-black"
              onClick={() => history.push("/product/1")}
              id="shop-now"
            >
              STUDIO BAG
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
