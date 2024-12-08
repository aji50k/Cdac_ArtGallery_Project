import React, { useState } from "react";
import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Starry Night",
    artist: "Vincent van Gogh",
    price: 1200,
    image: "/images/starry-night.jpg",
    description: "A masterpiece by Vincent van Gogh, depicting a swirling night sky."
  },
  {
    id: 2,
    name: "Mona Lisa",
    artist: "Leonardo da Vinci",
    price: 3000,
    image: "/images/mona-lisa.jpg",
    description: "One of the most famous paintings in the world by Leonardo da Vinci."
  }
];

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p><strong>Artist:</strong> {product.artist}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
