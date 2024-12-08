import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
import "../assets/css/Gallery.css"; // Importing custom CSS

// Importing all images
import image1 from "../assets/img/background-sketch.jpg";
import imgPortrait from "../assets/img/C2img2.jpg";
import imgPainting from "../assets/img/Painting.avif";
import imgSculpture from "../assets/img/C2img3.jpg";
import imgAbstract from "../assets/img/colorful-abstract.avif";
import imgTraditional from "../assets/img/C2img1.webp";
import { ROUTES } from "../constaints/RouteConstants";
import { Route } from "react-router-dom";


const categories = [
  {
    category: 'Abstract',
    image: {imgAbstract},
    description: 'Dive into the world of abstract art.',
  },
  {
    category: 'Portrait',
    image: {imgPortrait},
    description: 'Explore beautiful landscapes.',
  },
  {
    category: 'Painting',
    image: {imgPainting},
    description: 'A collection of stunning portraits.',
  },
  {
    category: 'Sculpture',
    image: {imgSculpture},
    description: 'Discover the beauty of modern art.',
  },
  {
    category: 'Traditional Art',
    image: {imgTraditional},
    description: 'Discover the beauty of modern art.',
  },
  {
    category: 'Digital',
    image: {image1},
    description: 'Discover the beauty of modern art.',
  },
];

function Gallery() {
  return (
    <div className="gallery">
      <div className="container my-4">
        <div className="gal-header text-center">
          <h1 className="display-4 font-weight-bold">Art Gallery</h1>
        </div>
      </div>
      <div className="gallery">
        <div className="gal-img-header">
          <img src={image1} alt="trek image" /> {/* Header image */}
        </div>


        <div className="container my-4">
        </div>
        <div className="gal-images">
          <a href={ROUTES.PORTRAITS}>
            <img src={imgPortrait} alt="portrait" />
            <div><h4>Potraits</h4></div>
          </a>
        </div>
        <div className="gal-images">
          <a href={ROUTES.PAINTINGS}>
            <img src={imgPainting} alt="painting" />
            <div><h4>Paintings</h4></div>
          </a>
        </div>
        <div className="gal-images">
          <a href={ROUTES.SCULPTURE}>
            <img src={imgSculpture} alt="sculpture" />
            <div><h4>Sculpture</h4></div>
          </a>
        </div>
        <div className="gal-images">
          <a href={ROUTES.ABSTRACT}>
            <img src={imgAbstract} alt="abstract art" />
            <div><h4>Abstract</h4></div>
          </a>
        </div>
        <div className="gal-images">
          <a href={ROUTES.TRADITIONAL}>
            <img src={imgTraditional} alt="traditional art" />
            <div><h4>Traditional Art</h4></div>
          </a>
        </div>
        <div className="gal-images">
          <a href={ROUTES.ABSTRACT}>
            <img src={image1} alt="digital art" />
            <div><h4>Digital Art</h4></div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
