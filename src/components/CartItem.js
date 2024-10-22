// src/components/CartItem.js
import React from 'react';

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <h2>{item.name}</h2>
      <p>Price: ${item.price.toFixed(2)}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={onDecrease}>-</button>
      <button onClick={onIncrease}>+</button>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
};

export default CartItem;
