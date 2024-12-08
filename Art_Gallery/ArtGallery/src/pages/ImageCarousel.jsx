import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import slide1Img from "../assets/img/slide1img.jpg";
import slide3Img from "../assets/img/slide3img.jpg";

import "../assets/css/Home.css";
import { ROUTES } from "../constaints/RouteConstants";

const ImageCarousel = () => {
  return (
    <Carousel>
      {/* First Slide */}
      <Carousel.Item interval={1000}>
        <div className="slides" id="slide1">
            <img src={slide1Img} alt="Slide1 image" className="slide1_img"/>
            
            <h2>Megan Groot</h2>
            <h1>Art Gallery</h1>
            <a href={ROUTES.PORTRAITS} className="btn btn-light text-uppercase mt-4">
                Our Products
            </a>
            
        </div>
      </Carousel.Item>

      {/* Second Slide */}
      <Carousel.Item interval={1000}>

        <div className="slides" id="slide2" >
            <h1>Art Work</h1>
            <h2>Discount Upto 25%</h2>
            <a href={ROUTES.GALLERY} className="btn btn-light text-uppercase mt-4" >Our Products</a>
        </div>
        
      </Carousel.Item>

      {/* Third Slide */}
      <Carousel.Item interval={1000}>

        <div className="slides" id="slide3" >
            <img src={slide3Img} alt="Slide1 image" className="slide3_img" />
            
                <h2>Samir Sastare</h2>
                <h1>Art Gallery</h1>
                <a href={ROUTES.PAINTINGS} className="btn btn-light text-uppercase mt-4">
                    Our Products
                </a>
            
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
export default ImageCarousel;