import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CoffeeShopsList.css';

interface CoffeeShop {
  id: number;
  name: string;
  price: string;
  category: string;
}

const CoffeeShopsList: React.FC = () => {
  const [coffeeShops, setCoffeeShops] = useState<CoffeeShop[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:3002/coffeeShops')
      .then(response => response.json())
      .then(data => {
        setCoffeeShops(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <ul className="coffee-shop-list">
        {coffeeShops.map(shop => (
          <li key={shop.id} className="coffee-shop-item">
            <Link to={`/coffee-shop/${shop.id}`} className="coffee-shop-link">
              <span className="coffee-shop-name">{shop.name}</span>
              <span className="coffee-shop-price">{shop.price}</span>
              <span className="coffee-shop-location">{shop.category}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoffeeShopsList;