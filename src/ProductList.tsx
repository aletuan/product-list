import React from 'react';
import './ProductList.css';

interface Product {
  id: number;
  name: string;
  price: string;
}

const ProductList: React.FC = () => {
  const products: Product[] = [
    { id: 1, name: 'Apple iPhone 13', price: '$799' },
    { id: 2, name: 'Samsung Galaxy S21', price: '$699' },
    { id: 3, name: 'Google Pixel 6', price: '$599' },
  ];

  return (
    <div className="product-list">
      <ul>
        {products.map(product => (
          <li key={product.id} className="product-item">
            <span className="product-name">{product.name}</span>
            <span className="product-price">{product.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;