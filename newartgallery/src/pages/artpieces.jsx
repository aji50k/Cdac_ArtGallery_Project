import React from "react";
import "./artpieces.css";

const Artpieces = ({ addToCart }) => {
  const artPieces = [
    {
      id: 1,
      name: "Mona Lisa",
      image: "/images/art1.jpg", // Ensure the path is correct
      price: 1000,
      artist: "Leonardo da Vinci",
      quantity: 1, // Add a quantity property
    },
    {
      id: 2,
      name: "The Starry Night",
      image: "/images/art2.jpg",
      price: 1500,
      artist: "Vincent van Gogh",
      quantity: 1,
    },
    {
      id: 3,
      name: "The Persistence of Memory",
      image: "/images/art3.jpeg",
      price: 1200,
      artist: "Salvador Dalí",
      quantity: 1,
    },
    {
      id: 4,
      name: "The Scream",
      image: "/images/art4.jpg",
      price: 900,
      artist: "Edvard Munch",
      quantity: 1,
    },
    {
      id: 5,
      name: "Girl with a Pearl Earring",
      image: "/images/art5.jpg",
      price: 800,
      artist: "Johannes Vermeer",
      quantity: 1,
    },
    {
      id: 6,
      name: "The Kiss",
      image: "/images/art6.jpg",
      price: 2000,
      artist: "Gustav Klimt",
      quantity: 1,
    },
    {
      id: 7,
      name: "The Birth of Venus",
      image: "/images/art7.jpg",
      price: 2500,
      artist: "Sandro Botticelli",
      quantity: 1,
    },
    {
      id: 8,
      name: "Guernica",
      image: "/images/art8.jpg",
      price: 2200,
      artist: "Pablo Picasso",
      quantity: 1,
    },
    {
      id: 9,
      name: "American Gothic",
      image: "/images/art9.jpg",
      price: 1000,
      artist: "Grant Wood",
      quantity: 1,
    },
    {
      id: 10,
      name: "The Night Watch",
      image: "/images/art10.jpg",
      price: 1800,
      artist: "Rembrandt",
      quantity: 1,
    },
    {
      id: 11,
      name: "The Last Supper",
      image: "/images/art11.jpg",
      price: 2100,
      artist: "Leonardo da Vinci",
      quantity: 1,
    },
    {
      id: 12,
      name: "Las Meninas",
      image: "/images/art12.jpg",
      price: 1600,
      artist: "Diego Velázquez",
      quantity: 1,
    },
    // Add more art pieces as needed
  ];

  const handleBuyNow = (artPiece) => {
    addToCart(artPiece);
  };

  return (
    <div className="artpieces-container">
      {artPieces.map((artPiece) => (
        <div key={artPiece.id} className="artpiece-item">
          <img
            src={artPiece.image}
            alt={artPiece.name}
            className="art-image"
          />
          <div className="artpiece-title">{artPiece.name}</div>
          <div className="artist-name">Artist: {artPiece.artist}</div>
          <div className="artpiece-price">${artPiece.price}</div>
          <button
            className="buy-now-btn"
            onClick={() => handleBuyNow(artPiece)}
          >
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default Artpieces;
