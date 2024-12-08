import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import "../assets/css/User.css"; // Import the custom CSS file for user profile page

import profilePhoto3 from "../assets/img/profile-photo3.png";
import profilePhoto2 from "../assets/img/profile-photo2.jpg";
import profilePhoto4 from "../assets/img/profile-photo4.png";
import profilePhoto5 from "../assets/img/profile-photo5.png";
import profilePhoto6 from "../assets/img/profile-photo6.png";
import { ROUTES } from "../constaints/RouteConstants";

function UserProfiles() {
  return (
    <div id="users-pr">
      <div className="container my-1" id="user-header">
        <div className="gal-header text-center">
          <h1 className="display-4 font-weight-bold">User Profiles</h1>
        </div>
      </div>

      <div className="user-gallery">
        <div className="gal-images">
          <a href={ROUTES.USER}>
            <img src={profilePhoto3} alt="Amanda Xavier" />
            <div>
              <h4>Amanda Xavier</h4>
            </div>
          </a>
        </div>

        <div className="gal-images">
          <a href="#">
            <img src={profilePhoto2} alt="Samir Sastare" />
            <div>
              <h4>Samir Sastare</h4>
            </div>
          </a>
        </div>

        <div className="gal-images">
          <a href="#">
            <img src={profilePhoto3} alt="Priya Sastri" />
            <div>
              <h4>Priya Sastri</h4>
            </div>
          </a>
        </div>

        <div className="gal-images">
          <a href="#">
            <img src={profilePhoto4} alt="Nikol Parker" />
            <div>
              <h4>Nikol Parker</h4>
            </div>
          </a>
        </div>

        <div className="gal-images">
          <a href="#">
            <img src={profilePhoto5} alt="Peter Stank" />
            <div>
              <h4>Peter Stank</h4>
            </div>
          </a>
        </div>

        <div className="gal-images">
          <a href="#">
            <img src={profilePhoto6} alt="Megan Groot" />
            <div>
              <h4>Megan Groot</h4>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default UserProfiles;
