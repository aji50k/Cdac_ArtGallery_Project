import axios from "axios";

const API_BASE_URL = "http://localhost:8081/api"; // Replace with your backend URL

// Submit contact form
export const submitContactForm = async (contactData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/contact`, contactData);
        return response.data;
    } catch (error) {
        console.error("Error submitting contact form:", error);
        throw error;
    }
};
