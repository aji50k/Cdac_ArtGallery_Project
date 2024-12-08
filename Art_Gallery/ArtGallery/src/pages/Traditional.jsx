import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Paintings.css'
import '../assets/css/Home.css';

// Import images
import paintImg1 from "../assets/img/paint/Pn_img1.jpg";
import paintImg2 from "../assets/img/paint/Pn_img2.jpg";
import paintImg3 from "../assets/img/C2img4.webp";
import paintImg4 from "../assets/img/paint/Pn_img3.webp";
import paintImg5 from "../assets/img/paint/Pn_img4.webp";

const Traditional = () => {
  return (
    <div className="gallery">
      <div className="container my-1">
        <div className="gal-header text-center">
          <h1 className="display-4 font-weight-bold">Traditional Art</h1>
        </div>
      </div>

      <div className="gallery">
        <div className="gal-images">
          <img src={paintImg3} alt="trek image" className="img-fluid" />
          <div>
            <div>Artist name: <span>XYZZZ</span></div>
            <span>Price: <span className="price">1200</span></span>
            <textarea
              className="form-control"
              id="description"
              name="description"
              rows="4"
              placeholder="Enter your review"
              required
            ></textarea>
            <div className="invalid-feedback">Please provide a description.</div>
            <button type="submit" className="btn btn-outline-success" id="review">Add Review</button>
            <button type="submit" className="btn btn-outline-dark" id="buy">Buy</button>
          </div>
        </div>

        <div className="gal-images">
          <img src={paintImg1} alt="trek image" className="img-fluid" />
          <div>
            <div>Artist name: <span>XYZZZ</span></div>
            <span>Price: <span className="price">1200</span></span>
            <textarea
              className="form-control"
              id="description"
              name="description"
              rows="4"
              placeholder="Enter your review"
              required
            ></textarea>
            <div className="invalid-feedback">Please provide a description.</div>
            <button type="submit" className="btn btn-outline-success" id="review">Add Review</button>
            <button type="submit" className="btn btn-outline-dark" id="buy">Buy</button>
          </div>
        </div>

        <div className="gal-images">
          <img src={paintImg2} alt="trek image" className="img-fluid" />
          <div>
            <div>Artist name: <span>XYZZZ</span></div>
            <span>Price: <span className="price">1200</span></span>
            <textarea
              className="form-control"
              id="description"
              name="description"
              rows="4"
              placeholder="Enter your review"
              required
            ></textarea>
            <div className="invalid-feedback">Please provide a description.</div>
            <button type="submit" className="btn btn-outline-success" id="review">Add Review</button>
            <button type="submit" className="btn btn-outline-dark" id="buy">Buy</button>
          </div>
        </div>

        <div className="gal-images">
          <img src={paintImg4} alt="trek image" className="img-fluid" />
          <div>
            <div>Artist name: <span>XYZZZ</span></div>
            <span>Price: <span className="price">1200</span></span>
            <textarea
              className="form-control"
              id="description"
              name="description"
              rows="4"
              placeholder="Enter your review"
              required
            ></textarea>
            <div className="invalid-feedback">Please provide a description.</div>
            <button type="submit" className="btn btn-outline-success" id="review">Add Review</button>
            <button type="submit" className="btn btn-outline-dark" id="buy">Buy</button>
          </div>
        </div>

        <div className="gal-images">
          <img src={paintImg5} alt="trek image" className="img-fluid" />
          <div>
            <div>Artist name: <span>XYZZZ</span></div>
            <span>Price: <span className="price">1200</span></span>
            <textarea
              className="form-control"
              id="description"
              name="description"
              rows="4"
              placeholder="Enter your review"
              required
            ></textarea>
            <div className="invalid-feedback">Please provide a description.</div>
            <button type="submit" className="btn btn-outline-success" id="review">Add Review</button>
            <button type="submit" className="btn btn-outline-dark" id="buy">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Traditional;
