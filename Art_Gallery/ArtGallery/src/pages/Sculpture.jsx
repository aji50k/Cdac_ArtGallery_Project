import React from 'react';
import '../assets/css/Paintings.css'
import '../assets/css/Home.css';

const Sculptures = () => {
  return (
    <div className="gallery">
      <div className="container my-1">
        <div className="gal-header text-center">
          <h1 className="display-4 font-weight-bold">Sculpture</h1>
        </div>
      </div>

      <div className="gallery">
        <div className="gal-images">
          <img src="Scluptre/S_img1.jpg" alt="sculpture image" />
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
          <img src="Scluptre/S_img2.jpg" alt="sculpture image" />
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
          <img src="Scluptre/S_img3.jpg" alt="sculpture image" />
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
          <img src="C2img3.jpg" alt="sculpture image" />
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
          <img src="Scluptre/S_img2.jpg" alt="sculpture image" />
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
          <img src="Scluptre/S_img1.jpg" alt="sculpture image" />
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
};

export default Sculptures;
