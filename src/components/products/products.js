/* eslint-disable jsx-a11y/alt-text */
import "./products.css";

import einsteinImage from "../../images/einstein.svg";
import threeSixtyImage from "../../images/360.svg";

const Products = () => {
  return (
    <div className="products-container">
      <h1>Products Featured</h1>

      <div className="products-contentContainer">
        <div class="products-item">
          <div className="products-itemImage">
            <img src={einsteinImage} />
          </div>
          <p>Einstein AI</p>
        </div>

        <div class="products-item">
          <div className="products-itemImage">
            <img src={threeSixtyImage} />
          </div>
          <p>Customer 360</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
