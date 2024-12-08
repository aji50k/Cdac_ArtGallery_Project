// React Component
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/port1.css'; // Custom CSS for styling

// Image Imports (Replace with your actual paths or URLs)
import Img1 from '../assets/img/C2img2.jpg';
import Img2 from '../assets/img/Prt/Pr_img1.jpg';
import Img3 from '../assets/img/Prt/Pr_img2.jpg';

const Potraits = () => {
  const artworks = [
    { id: 1, img: Img1, artist: 'Artist A', price: 1200 },
    { id: 2, img: Img2, artist: 'Artist B', price: 1500 },
    { id: 3, img: Img3, artist: 'Artist C', price: 1800 },
  ];

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Abstract Art</h1>
      <div className="row">
        {artworks.map((art) => (
          <div key={art.id} className="col-12 mb-4">
            <div className="card shadow-sm">
              <div className="row g-0 align-items-center">
                <div className="col-md-4">
                  <img
                    src={art.img}
                    className="img-fluid rounded-start"
                    alt={`Artwork by ${art.artist}`}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Artist: {art.artist}</h5>
                    <p className="card-text">Price: ${art.price}</p>
                    <textarea
                      className="form-control mb-3"
                      rows="3"
                      placeholder="Enter your review"
                    ></textarea>
                    <div>
                      <button className="btn btn-success me-2">Add Review</button>
                      <button className="btn btn-dark">Buy</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Potraits;
