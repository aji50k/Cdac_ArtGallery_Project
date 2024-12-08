// PortfolioCreation.jsx
import React, { useState, useEffect } from "react";
import "../assets/css/Portfolia.css"; // Assuming you have the same CSS file

function PortfolioCreation() {

  const [projects, setProjects] = useState([]); // State to store project data
  const [editProject, setEditProject] = useState(null); // State to manage editing

  useEffect(() => {
    // Fetch projects data from the database (Replace with actual API call)
    // For demonstration, using static data
    const fetchedProjects = [
      {
        id: 1,
        username: "John Doe",
        userId: "123",
        title: "Landscape Painting",
        description: "A beautiful landscape painting",
        type: "Painting",
        image: "image1.jpg",
        price: "5000",
      },
      // Add more sample projects here
    ];
    setProjects(fetchedProjects);
  }, []);

  const handleEdit = (project) => {
    setEditProject(project);
    document.getElementById("Uname").value = project.username;
    document.getElementById("Uid").value = project.userId;
    document.getElementById("Ptitle").value = project.title;
    document.getElementById("Pdisc").value = project.description;
    document.getElementById("Ptype").value = project.type;
    document.getElementById("price").value = project.price;
  };

  const handleDelete = (id) => {
    // Delete project from the state (Replace with actual delete API call)
    setProjects(projects.filter((project) => project.id !== id));
  };

  return (
    <div>
      

      <div className="container my-5" id="maindiv1">
        <div className="container my-5">
          <div className="text-center" id="port-div">
            <h1 className="display-4 font-weight-bold" id="port-header">
              Portfolio
            </h1>
          </div>
        </div>
        <div id="div1">
          <form autoComplete="off" onSubmit={(e) => e.preventDefault()} id="portfolioForm">
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
                      name="description"
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
                    <label htmlFor="price" className="lab">
                      Price
                    </label>
                  </td>
                  <td>
                    <input
                      type="number"
                      name="Price"
                      id="price"
                      placeholder="In Rupees"
                      className="form-control"
                      min="100"
                      step="0.01"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="submit" id="submit-btn" value="Upload Project" />
                  </td>
                  <td>
                    <input type="reset" id="reset-btn" value="Reset" />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
      {/*Table for displaying projects */}
      <div className="mt-5">
          <h2 className="text-center">Uploaded Projects</h2>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>User Name</th>
                <th>Project Title</th>
                <th>Project Type</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id}>
                  <td>{project.username}</td>
                  <td>{project.title}</td>
                  <td>{project.type}</td>
                  <td>{project.price}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => handleEdit(project)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger ml-2"
                      onClick={() => handleDelete(project.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
      
    </div>
  );
}

export default PortfolioCreation;
