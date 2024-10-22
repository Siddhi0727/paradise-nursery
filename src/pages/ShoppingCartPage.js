// src/pages/ShoppingCartPage.js
import React from 'react';
import CartItem from '../components/CartItem';

const ShoppingCartPage = ({ cartItems, onIncrease, onDecrease, onRemove }) => {
  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="shopping-cart-page">
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onIncrease={() => onIncrease(item.id)}
            onDecrease={() => onDecrease(item.id)}
            onRemove={() => onRemove(item.id)}
          />
        ))
      )}
      <h2>Total Cost: ${totalCost.toFixed(2)}</h2>
    </div>
  );
};

export default ShoppingCartPage;
