import React, { useState } from "react";
import "../App.css";

const CartPage = ({ cartItems, removeFromCart }) => {
  const [isOpen, setIsOpen] = useState(true); // Start with the cart open by default

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.price * item.quantity || 0), // Ensure quantity is used
    0
  );

  const shipping = totalPrice > 0 ? 100 : 0; // Shipping cost
  const grandTotal = totalPrice + shipping; // Grand total

  const toggleCart = () => {
    setIsOpen(!isOpen); // Toggle the cart open/close
  };

  return (
    <>
      {/* Navbar Cart Icon (Optional, replace if already managed elsewhere) */}
      <div className="navbar-cart" onClick={toggleCart}></div>

      {/* Sidebar Content */}
      {isOpen && (
        <div className="cart-page">
          {/* Cart Header */}
          <div className="cart-header">
            <h2>Your Cart</h2>
            <button
              className="close-cart"
              onClick={toggleCart} // Toggle cart visibility
            >
              &times;
            </button>
          </div>

          {/* Check if the cart is empty */}
          {cartItems.length === 0 ? (
            <p className="empty-cart">Your cart is empty.</p>
          ) : (
            <div>
              {/* List of Cart Items */}
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-img"
                  />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>{item.artist}</p>
                    <p>Rs {item.price}</p>
                    <p>Quantity: {item.quantity}</p> {/* Display quantity */}
                  </div>
                  <button
                    className="remove-item"
                    onClick={() => removeFromCart(item.id)}
                  >
                    &#x1F5D1;
                  </button>
                </div>
              ))}

              {/* Cart Summary */}
              <div className="cart-summary">
                <div className="summary-row">
                  <span>Shipping</span>
                  <span>Rs {shipping}</span>
                </div>
                <div className="summary-row total">
                  <span>Total</span>
                  <span>Rs {grandTotal}</span>
                </div>
                <button className="checkout-btn">Checkout</button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default CartPage;
