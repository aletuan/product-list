import React from 'react';
import './ProductList.css';

interface Product {
  id: number;
  name: string;
  price: string;
  category: string; // Added category field
}


const ProductList: React.FC = () => {
  const products: Product[] = [
    { id: 1, name: 'Apple iPhone 13', price: '$799', category: 'Electronics' },
    { id: 2, name: 'Samsung Galaxy S21', price: '$699', category: 'Electronics' },
    { id: 3, name: 'Google Pixel 6', price: '$599', category: 'Electronics' },
  ];

  return (
    <div className="product-list">
      <ul>
        {products.map(product => (
          <li key={product.id} className="product-item">
            <div className="product-info">
              <span className="product-name">{product.name}</span>
              <span className="product-price">{product.price}</span>          
            </div>
            <span className="product-category">{product.category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;