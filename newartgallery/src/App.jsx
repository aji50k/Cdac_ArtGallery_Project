import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import BlogDetails from "./components/BlogDetails";
import Navbar from "./components/navbar";
import Contact from "./pages/contact";
import Artpieces from "./pages/artpieces";
import CartPage from "./pages/cartpage";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (artPiece) => {
    // Check if the artPiece is already in the cart
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === artPiece.id);
      if (existingItem) {
        // If the item already exists, increase the quantity
        return prevCart.map((item) =>
          item.id === artPiece.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If the item is new, add it to the cart
        return [...prevCart, artPiece];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <Navbar cartCount={cartItems.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/artpieces" element={<Artpieces addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
