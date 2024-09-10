import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductList from './ProductList';

test('renders product list with correct products', () => {
  render(<ProductList />);

  // Check if the product names are rendered
  expect(screen.getByText('Apple iPhone 13')).toBeInTheDocument();
  expect(screen.getByText('Samsung Galaxy S21')).toBeInTheDocument();
  expect(screen.getByText('Google Pixel 6')).toBeInTheDocument();

  // Check if the product prices are rendered
  expect(screen.getByText('$799')).toBeInTheDocument();
  expect(screen.getByText('$699')).toBeInTheDocument();
  expect(screen.getByText('$599')).toBeInTheDocument();
});