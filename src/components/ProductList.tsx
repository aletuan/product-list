import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';

interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:3002/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="product-list">
      <ul>
        {products.map(product => (
          <li key={product.id} className="product-item">
            <Link to={`/product/${product.id}`} className="product-link">
              <div className="product-info">
                <span className="product-name">{product.name}</span>
                <span className="product-price">{product.price}</span>
              </div>
              <span className="product-category">{product.category}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;