import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BlogDetails() {
  const { id } = useParams(); // Extract the blog ID from the route
  const [blog, setBlog] = useState(null); // State to hold the fetched blog data
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to manage errors

  // Fetch blog details when component mounts or when the `id` changes
  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`http://localhost:8080/api/blogs/${id}`) // Replace with your API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error fetching blog details: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setBlog(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>; // Show loading indicator
  }

  if (error) {
    return <p>Error: {error}</p>; // Show error message
  }

  if (!blog) {
    return <h1>Blog not found!</h1>; // Show message if blog is not found
  }

  return (
    <div className="blog-details">
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
}

export default BlogDetails;
