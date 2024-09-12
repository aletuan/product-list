import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // Check if the header is rendered
  const headerElement = screen.getByText(/Discover Our Top-Rate Coffee Shops/i);
  expect(headerElement).toBeInTheDocument();
});
