import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { FaShoppingCart } from "react-icons/fa";

function Navbar({cartCount}) {
  return (
    <nav className="navbar">
      <div className="logo">Art Gallery</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
        <Link to="/artpieces">Artpieces</Link>
        </li>
        <div className="cart-icon">
        <Link to="/cart">
          <FaShoppingCart size={24} />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>
      </div>
      </ul>
    </nav>
  );
}

export default Navbar;
