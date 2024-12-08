import axios from "axios";

const API_BASE_URL = "http://localhost:8081/api"; // Replace with your backend URL

// Fetch all blogs
export const fetchBlogs = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/blogs`);
        return response.data;
    } catch (error) {
        console.error("Error fetching blogs:", error);
        throw error;
    }
};

// Fetch a single blog by ID
export const fetchBlogById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/blogs/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching blog by ID:", error);
        throw error;
    }
};

// Add a new blog
export const addBlog = async (blog) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/blogs`, blog);
        return response.data;
    } catch (error) {
        console.error("Error adding blog:", error);
        throw error;
    }
};
