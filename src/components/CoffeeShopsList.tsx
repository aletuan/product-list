import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CoffeeShopsList.css';

interface CoffeeShop {
  id: number;
  name: string;
  voteRate: string;
  category: string;
  description: string;
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

  const renderStars = (rate: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rate) {
        stars.push(<span key={i} className="star filled">★</span>);
      } else {
        stars.push(<span key={i} className="star">☆</span>);
      }
    }
    return stars;
  };  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <div className="coffee-shop-grid">
        {coffeeShops.map(shop => (
          <div key={shop.id} className="coffee-shop-tile">
            <Link to={`/coffee-shop/${shop.id}`} className="coffee-shop-link">
              <span className="coffee-shop-name">{shop.name}</span>
            </Link>              
              <div className="coffee-shop-vote-rate">
                {renderStars(parseFloat(shop.voteRate))}
              </div>
              <p className="coffee-shop-description">{shop.description}</p>              
              <span className="coffee-shop-location">{shop.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoffeeShopsList;