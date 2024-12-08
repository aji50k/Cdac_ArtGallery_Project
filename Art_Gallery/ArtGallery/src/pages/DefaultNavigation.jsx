import React from 'react';
import img1 from '../assets/img/image.png';
import '../assets/css/Home.css';
import { ROUTES } from '../constaints/RouteConstants';

const DefaultNavigation = () =>{
  return (
    <header>
      <nav className="navbar navbar-expand-lg" id="nav1">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={img1} alt="ART" id="art" />
            Echoes of Palette
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="ti-align-justify navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href={ROUTES.HOME}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={ROUTES.PORTFOLIO_CREATION}>
                  Portfolio Creation
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={ROUTES.GALLERY}>
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={ROUTES.USER_PROFILES}>
                  User Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default DefaultNavigation;