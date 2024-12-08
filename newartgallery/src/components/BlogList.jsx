import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blogs from an API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5") // Replace this URL with your API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch blog data");
        }
        return response.json();
      })
      .then((data) => {
        // Map the fetched data to your structure
        const blogsData = data.map((item) => ({
          id: item.id,
          title: item.title,
          description: item.body.substring(0, 100) + "...", // Truncate description
        }));
        setBlogs(blogsData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading blogs...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-card" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
          <Link to={`/blogs/${blog.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
