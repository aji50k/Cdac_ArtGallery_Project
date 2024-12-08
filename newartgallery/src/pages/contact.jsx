import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      return toast.warn("Please fill all required fields!");
    }

    try {
      const { data, status } = await axios.post(
        "/api/v1/contact",
        { name, email, subject, message },
        { headers: { "Content-Type": "application/json" } }
      );

      if (status >= 300) {
        throw new Error(data);
      }

      if (data.success) {
        toast.success(data.message);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="contactContainer">
      <div className="heading">
        <h2>Contact Our Art Gallery</h2>
        <p>
          Have questions or inquiries? Reach out to us, and we'll be happy to
          assist you. Whether it's about our artwork or exhibitions, we are
          here to help.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Your Name</label> <br />
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Your Email</label> <br />
          <input
            type="email"
            placeholder="example@artgallery.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Subject</label> <br />
          <input
            type="text"
            placeholder="Optional"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div>
          <label>Message</label> <br />
          <textarea
            placeholder="Your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
