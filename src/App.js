// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import ProductListingPage from './pages/ProductListingPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import './styles.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    const existingItem = cart.find(item => item.id === plant.id);
    if (existingItem) {
      setCart(cart.map(item => item.id === plant.id ? { ...existingItem, quantity: existingItem.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...plant, quantity: 1 }]);
    }
  };

  const increaseItemQuantity = (id) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decreaseItemQuantity = (id) => {
    const item = cart.find(item => item.id === id);
    if (item.quantity > 1) {
      setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item));
    } else {
      removeItem(id);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <Router>
      <Header itemCount={cart.reduce((count, item) => count + item.quantity, 0)} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListingPage onAddToCart={addToCart} />} />
        <Route path="/cart" element={
          <ShoppingCartPage
            cartItems={cart}
            onIncrease={increaseItemQuantity}
            onDecrease={decreaseItemQuantity}
            onRemove={removeItem}
          />
        } />
      </Routes>
    </Router>
  );
};

export default App;
