import React, { useEffect } from "react";
import "../styles/product-carousel.css";
import { Row, Col } from "react-bootstrap";
import Product from "./Product";
import Slider from "react-slick";
import "../styles/horizontal-slider.css";

const HorizontalSlider = ({ header, products, isBrowsingHistory }) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 4,
    slidesToShow: 4,
  };
  return (
    <>
      <div className="slider container">
        <h3 className="header text-center">{header}</h3>
        <Slider {...settings}>
          {products &&
            products.map((product) => {
              return (
                <>
                  <Col key={product._id}>
                    <Product
                      product={product}
                      isBrowsingHistory={isBrowsingHistory}
                    />
                  </Col>
                </>
              );
            })}
        </Slider>
      </div>
    </>
  );
};

export default HorizontalSlider;
