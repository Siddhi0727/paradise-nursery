// Example in ProductListingPage.js
import React from 'react';
import plant1 from '../images/snake_plant.png';
import plant2 from '../images/fiddle_leaf.png';
import plant3 from '../images/aloevera.png';
import plant4 from '../images/peacelily.png';
import plant5 from '../images/monestra.png';
import plant6 from '../images/spider.png';



const products = [
  {
    id: 1,
    name: 'Fiddle Leaf Fig',
    price: 50,
    image: plant2,
    category: 'Large Plants'
  },
  {
    id: 2,
    name: 'Snake Plant',
    price: 30,
    image: plant1,
    category: 'Low Light Plants'
  },
  {
    id: 3,
    name: 'Spider Plant',
    price: 25,
    image: plant6,
    category: 'Air Purifiers'
  },
  {
    id: 4,
    name: 'Monstera',
    price: 45,
    image: plant5,
    category: 'Large Plants'
  },
  {
    id: 5,
    name: 'Peace Lily',
    price: 35,
    image: plant4,
    category: 'Air Purifiers'
  },
  {
    id: 6,
    name: 'Aloe Vera',
    price: 20,
    image: plant3,
    category: 'Low Light Plants'
  }
];


const ProductListingPage = ({ onAddToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} style={{ width: '100%' }} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductListingPage;
