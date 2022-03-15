import React, { useEffect } from "react";
import "../styles/product-carousel.css";
import { Row, Col } from "react-bootstrap";
import Product from "./Product";
import "../styles/vertical-slider.css";

const VerticalSlider = ({ header, products, position }) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 4,
    slidesToShow: 4,
  };
  return (
    <>
      <div
        className="vertical-slider container"
        style={position == "left" ? { left: "0" } : { right: "0" }}
      >
        <h2 className="heading text-center">{header}</h2>
        <div className="items">
          {products &&
            products.map((product) => {
              return (
                <>
                  <Col key={product._id}>
                    <Product isVerticalScrollItem={true} product={product} />
                  </Col>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default VerticalSlider;
