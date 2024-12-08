import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/Home.css";
import ImageCarousel from "./ImageCarousel";
import SwapingImage from "./SwapingImage";

const Home = () => {
 ;

  return (
    <div className="body-container" style={{ minHeight: "100vh" }}>
     

      {/* Carousel Section */}
      <div className="container-fluid">
        <ImageCarousel />
      </div>

      <SwapingImage/>

      {/* Footer Section */}
      <footer className="bg-light py-5">
        <div className="container text-center">
          <h3>Connect with Us</h3>
          <p>
            Stay inspired! Join our community for the latest updates, workshops,
            and creative insights.
          </p>

          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>{" "}
            |{" "}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>{" "}
            |{" "}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </div>

          <div className="contact-info my-3">
            <p>
              Email: <a href="mailto:echoesofpalette@gmail.com">echoesofpalette@gmail.com</a>
            </p>
            <p>Phone: (123) 456-7890</p>
          </div>

          <div className="newsletter">
            <h4>Subscribe to Our Newsletter</h4>
            <label htmlFor="Esub">Email Subscription</label>
            <input
              type="email"
              placeholder="Enter your email"
              id="Esub"
              className="form-control"
            />
            <button type="submit" className="btn btn-primary mt-3">
              Subscribe
            </button>
          </div>

          <p className="mt-4">2024 Echoes of Palette.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
