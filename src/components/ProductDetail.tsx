import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = React.useState<Product | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    fetch(`http://localhost:3002/products/${id}`)
      .then(response => response.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-detail">
      <h2 className="product-detail-name">{product.name}</h2>
      <p className="product-detail-price">{product.price}</p>
      <p className="product-detail-category">{product.category}</p>
    </div>
  );
};

export default ProductDetail;