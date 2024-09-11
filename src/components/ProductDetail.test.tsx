import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProductDetail from './ProductDetail';

// Mock MutationObserver
global.MutationObserver = class {
  constructor(callback: any) {}
  disconnect() {}
  observe(element: any, initObject: any) {}
  takeRecords() {
    return [];
  }
};

const mockProduct = {
  id: 1,
  name: 'Apple iPhone 13',
  price: '$799',
  category: 'Electronics',
};

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockProduct),
    })
  ) as jest.Mock;
});

afterEach(() => {
  jest.resetAllMocks();
});

test('renders product details', async () => {
  await act(async () => {
    render(
      <MemoryRouter initialEntries={['/product/1']}>
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </MemoryRouter>
    );
  });

  expect(await screen.findByText('Apple iPhone 13')).toBeInTheDocument();
  expect(await screen.findByText('$799')).toBeInTheDocument();
  expect(await screen.findByText('Electronics')).toBeInTheDocument();
});

test('displays loading state initially', () => {
  render(
    <MemoryRouter initialEntries={['/product/1']}>
      <Routes>
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText('Loading...')).toBeInTheDocument();
});

test('displays error message on fetch failure', async () => {
  global.fetch = jest.fn(() =>
    Promise.reject(new Error('Failed to fetch'))
  ) as jest.Mock;

  await act(async () => {
    render(
      <MemoryRouter initialEntries={['/product/1']}>
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </MemoryRouter>
    );
  });

  expect(await screen.findByText('Error: Failed to fetch')).toBeInTheDocument();
});