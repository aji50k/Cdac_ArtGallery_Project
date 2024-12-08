import React from 'react';
import CategoryCard from './CategoryCard';

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

const CategoriesDashboard = () => {
  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Art Gallery </h1>
      <div className="row">
        {categories.map((cat, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
            <CategoryCard
              category={cat.category}
              image={cat.image}
              description={cat.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesDashboard;
