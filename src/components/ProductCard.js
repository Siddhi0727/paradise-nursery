// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ plant, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={plant.image} alt={plant.name} />
      <h2>{plant.name}</h2>
      <p>${plant.price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(plant)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
