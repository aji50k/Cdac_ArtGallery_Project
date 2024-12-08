import React from 'react';
import paintImg1 from "../assets/img/paint/Pn_img1.jpg";
import paintImg2 from "../assets/img/paint/Pn_img2.jpg";
import paintImg3 from "../assets/img/C2img4.webp";
import paintImg4 from "../assets/img/paint/Pn_img3.webp";
import paintImg5 from "../assets/img/paint/Pn_img4.webp";
import backgroundSketch from "../assets/img/background-sketch.jpg";

export default function Traditional() {
  return (
    <div className="gallery">
      <div className="container my-1">
        <div className="gal-header text-center">
          <h1 className="display-4 font-weight-bold">Profile</h1>
        </div>
      </div>

      <div className="gallery">
        <div style={{ backgroundColor: 'rgb(242, 195, 133)', width: '80%' }}>
          <div>
            <img src="profile-photo3.png" alt="Profile" style={{ height: '5rem' }} />
          </div>
          <div>User Name: Amanda Xavier</div>
          <div>User Id: AX243SD112</div>
          <div>Age: 29</div>
        </div>

        <div className="gal-images">
          <img src={paintImg1} alt="trek image" />
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
          <img src={paintImg2} alt="trek image" />
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
          <img src={paintImg3} alt="trek image" />
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
          <img src={paintImg4} alt="trek image" />
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
          <img src={paintImg5} alt="trek image" />
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
          <img src={backgroundSketch} alt="trek image" />
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

