// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ itemCount }) => {
  return (
    <header>
      <h1>Paradise Nursery</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({itemCount})</Link>
      </nav>
    </header>
  );
};

export default Header;
