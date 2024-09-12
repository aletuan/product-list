import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import CoffeeShopsList from './CoffeeShopsList';

// Mock MutationObserver
global.MutationObserver = class {
  constructor(callback: any) {}
  disconnect() {}
  observe(element: any, initObject: any) {}
  takeRecords() {
    return [];
  }
};

// Mock coffee shop data
const mockCoffeeShops = [
  { id: 1, name: 'Saigon Brew', price: '$5', category: 'Ho Chi Minh City' },
  { id: 2, name: 'Hanoi Beans', price: '$6', category: 'Hanoi' },
  { id: 3, name: 'Da Nang Delight', price: '$7', category: 'Da Nang' },
];

// Mock fetch
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockCoffeeShops),
    })
  ) as jest.Mock;
});

afterEach(() => {
  jest.resetAllMocks();
});

test('renders coffee shops list with correct shops', async () => {
  await act(async () => {
    render(
      <MemoryRouter>
        <CoffeeShopsList />
      </MemoryRouter>
    );
  });

  // Check if the coffee shop names are rendered
  expect(await screen.findByText('Saigon Brew')).toBeInTheDocument();
  expect(await screen.findByText('Hanoi Beans')).toBeInTheDocument();
  expect(await screen.findByText('Da Nang Delight')).toBeInTheDocument();

  // Check if the coffee shop prices are rendered
  expect(await screen.findByText('$5')).toBeInTheDocument();
  expect(await screen.findByText('$6')).toBeInTheDocument();
  expect(await screen.findByText('$7')).toBeInTheDocument();

  // Check if the coffee shop locations are rendered
  expect(await screen.findByText('Ho Chi Minh City')).toBeInTheDocument();
  expect(await screen.findByText('Hanoi')).toBeInTheDocument();
  expect(await screen.findByText('Da Nang')).toBeInTheDocument();
});