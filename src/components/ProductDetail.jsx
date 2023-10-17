import React from "react";
import ColorProduct from "../assets/color-product.png";
import "../styles/ProductDetail.scss";

const UpperText = ({text}) => {
  return (
    <>
      <span
        style={{ fontSize: "14px", color: "grey", margin: "15px 0px 20px 0px" }}
      >
        Upper Text
      </span>
      <input type="text" placeholder={text} />
    </>
  );
};
const ProductDetail = () => {
  return (
    <div className="product-detail">
      <span className="heading">Settings</span>
      <div className="color-tab">
        <span>Change T-shirt color</span>
        <img src={ColorProduct} />
      </div>

      <div className="change-image">
        <span>Change Image</span>
        <div className="upload">
          <div className="input-image">
            <input type="file" id="myFile" name="filename" />
            <input type="text" className="text-input" />
          </div>
          <button>UPLOAD NOW</button>
        </div>
      </div>

      <div className="write-text">
        <span>Write Text</span>
        <UpperText text="Upper Text"/>
        <UpperText text= "Lower Text"/>
      </div>

      <div className="Bottom-content">
        <div className="text-range">
          <span>Text size</span>
          <input type="range" className="slider" id="myRange"></input>
        </div>

        <div className="color-setter">
          <span>Text Color</span>
          <div>
            <input type="radio" id="black" name="colors" />
            <label htmlFor="black">Black</label>
          </div>
          <div>
            <input type="radio" id="white" name="colors" />
            <label htmlFor="css">white</label>
          </div>
          <div>
            <input type="radio" id="blue" name="colors" />
            <label htmlFor="blue">blue</label>
          </div>
          <div>
            <input type="radio" id="red" name="colors" />
            <label htmlFor="red">red</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
