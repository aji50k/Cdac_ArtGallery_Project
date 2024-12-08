import React from "react";
import "../assets/css/Portfolia.css"; 

const PortfolioForm = () => {
  return (
    <div id="div1">
      <form autoComplete="off" id="portfolioForm">
        <table id="add-img">
          <tbody>
            <tr>
              <td>
                <label htmlFor="Uname" className="lab">
                  User Name
                </label>
              </td>
              <td>
                <input type="text" id="Uname" placeholder="Name" required />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="Uid" className="lab">
                  User Id
                </label>
              </td>
              <td>
                <input type="text" id="Uid" placeholder="Id" required />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="Ptitle" className="lab">
                  Project Title
                </label>
              </td>
              <td>
                <input type="text" id="Ptitle" placeholder="Title" required />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="Pdisc" className="lab">
                  Project Description
                </label>
              </td>
              <td>
                <textarea
                  className="form-control"
                  id="Pdisc"
                  rows="4"
                  placeholder="Enter your review"
                  required
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="Ptype" className="lab">
                  Project Type
                </label>
              </td>
              <td>
                <select name="Ptype" id="Ptype" className="form-control">
                  <option value="">Select Project Type</option>
                  <option value="Abstract">Abstract</option>
                  <option value="Portrait">Portrait</option>
                  <option value="Painting">Painting</option>
                  <option value="Sculptor">Sculptor</option>
                  <option value="Traditional Art">Traditional Art</option>
                  <option value="Digital Art">Digital Art</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <span className="lab">Upload Image</span>
              </td>
              <td>
                <div className="form-group">
                  <input type="file" className="form-control-file" id="imageUp" required />
                  <div className="invalid-feedback">Please upload an image for your project.</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <button type="submit" className="btn btn-primary">
                  Upload Project
                </button>
              </td>
              <td>
                <button type="reset" className="btn btn-secondary">
                  Reset
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default PortfolioForm;
