import React from 'react';
import img1 from '../assets/img/image.png';
import '../assets/css/Home.css';
import { ROUTES } from '../constaints/RouteConstants';

const GalleryNavigation=()=> {
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
                <a className="nav-link active" aria-current="page" href={ROUTES.ABSTRACT}>
                  Abstracts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={ROUTES.PAINTINGS}>
                  Paintings
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={ROUTES.PORTRAITS}>
                  Portraits
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={ROUTES.SCULPTURE}>
                  Sculpture
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={ROUTES.TRADITIONAL}>
                  Traditional
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default GalleryNavigation;