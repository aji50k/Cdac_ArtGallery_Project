import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import "../assets/css/Paintings.css"; // Import your custom CSS
import "../assets/css/Home.css"; // Import your custom CSS

import colorfulAbstract from "../assets/img/colorful-abstract.avif";
import downloadImg from "../assets/img/download.jpg";
import image from "../assets/img/image.png";
import painting from "../assets/img/Painting.avif";
import wave from "../assets/img/Wave.jpg";
import backgroundSketch from "../assets/img/background-sketch.jpg";

function Abstract() {
  return (
    <div className="gallery">
      <div className="container my-1">
        <div className="gal-header text-center">
          <h1 className="display-4 font-weight-bold">Abstract Art</h1>
        </div>
      </div>
      
      <div className="gallery">
        <div className="gal-images">
          <img src={colorfulAbstract} alt="Abstract art" />
          <div>
            <div>Artist name: <span>XYZZZ</span></div>
            <span>Price: <span className="price">1200</span></span>

            <textarea className="form-control" id="description" name="description" rows="4" placeholder="Enter your review" required></textarea>
            <div className="invalid-feedback">Please provide a description.</div>
            <button type="submit" className="btn btn-outline-success" id="review">Add Review</button>
            <button type="submit" className="btn btn-outline-dark" id="buy">Buy</button>
          </div>
        </div>

        <div className="gal-images">
          <img src={downloadImg} alt="Abstract art" />
          <div>
            <div>Artist name: <span>XYZZZ</span></div>
            <span>Price: <span className="price">1200</span></span>

            <textarea className="form-control" id="description" name="description" rows="4" placeholder="Enter your review" required></textarea>
            <div className="invalid-feedback">Please provide a description.</div>
            <button type="submit" className="btn btn-outline-success" id="review">Add Review</button>
            <button type="submit" className="btn btn-outline-dark" id="buy">Buy</button>
          </div>
        </div>

        <div className="gal-images">
          <img src={image} alt="Abstract art" />
          <div>
            <div>Artist name: <span>XYZZZ</span></div>
            <span>Price: <span className="price">1200</span></span>

            <textarea className="form-control" id="description" name="description" rows="4" placeholder="Enter your review" required></textarea>
            <div className="invalid-feedback">Please provide a description.</div>
            <button type="submit" className="btn btn-outline-success" id="review">Add Review</button>
            <button type="submit" className="btn btn-outline-dark" id="buy">Buy</button>
          </div>
        </div>

        <div className="gal-images">
          <img src={painting} alt="Abstract art" />
          <div>
            <div>Artist name: <span>XYZZZ</span></div>
            <span>Price: <span className="price">1200</span></span>

            <textarea className="form-control" id="description" name="description" rows="4" placeholder="Enter your review" required></textarea>
            <div className="invalid-feedback">Please provide a description.</div>
            <button type="submit" className="btn btn-outline-success" id="review">Add Review</button>
            <button type="submit" className="btn btn-outline-dark" id="buy">Buy</button>
          </div>
        </div>

        <div className="gal-images">
          <img src={wave} alt="Abstract art" />
          <div>
            <div>Artist name: <span>XYZZZ</span></div>
            <span>Price: <span className="price">1200</span></span>

            <textarea className="form-control" id="description" name="description" rows="4" placeholder="Enter your review" required></textarea>
            <div className="invalid-feedback">Please provide a description.</div>
            <button type="submit" className="btn btn-outline-success" id="review">Add Review</button>
            <button type="submit" className="btn btn-outline-dark" id="buy">Buy</button>
          </div>
        </div>

        <div className="gal-images">
          <img src={backgroundSketch} alt="Abstract art" />
          <div>
            <div>Artist name: <span>XYZZZ</span></div>
            <span>Price: <span className="price">1200</span></span>

            <textarea className="form-control" id="description" name="description" rows="4" placeholder="Enter your review" required></textarea>
            <div className="invalid-feedback">Please provide a description.</div>
            <button type="submit" className="btn btn-outline-success" id="review">Add Review</button>
            <button type="submit" className="btn btn-outline-dark" id="buy">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Abstract;
