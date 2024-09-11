import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import ProductList from './ProductList';

// Mock MutationObserver
global.MutationObserver = class {
  constructor(callback: any) {}
  disconnect() {}
  observe(element: any, initObject: any) {}
  takeRecords() {
    return [];
  }
};

// Mock product data
const mockProducts = [
  { id: 1, name: 'Apple iPhone 13', price: '$799', category: 'Electronics' },
  { id: 2, name: 'Samsung Galaxy S21', price: '$699', category: 'Electronics' },
  { id: 3, name: 'Google Pixel 6', price: '$599', category: 'Electronics' },
];

// Mock fetch
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockProducts),
    })
  ) as jest.Mock;
});

afterEach(() => {
  jest.resetAllMocks();
});

test('renders product list with correct products', async () => {
  await act(async () => {
    render(
      <MemoryRouter>
        <ProductList />
      </MemoryRouter>
    );
  });

  // Check if the product names are rendered
  expect(await screen.findByText('Apple iPhone 13')).toBeInTheDocument();
  expect(await screen.findByText('Samsung Galaxy S21')).toBeInTheDocument();
  expect(await screen.findByText('Google Pixel 6')).toBeInTheDocument();

  // Check if the product prices are rendered
  expect(await screen.findByText('$799')).toBeInTheDocument();
  expect(await screen.findByText('$699')).toBeInTheDocument();
  expect(await screen.findByText('$599')).toBeInTheDocument();
});