import React from 'react';

const CategoryCard = ({ category, image, description }) => {
  return (
    <div className="card shadow-sm mb-3">
      <img src={image} className="card-img-top" alt={category} />
      <div className="card-body">
        <h5 className="card-title">{category}</h5>
        <p className="card-text">{description}</p>
        <button className="btn btn-primary">Explore</button>
      </div>
    </div>
  );
};

export default CategoryCard;
