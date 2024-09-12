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
  { id: 1, name: 'Saigon Brew', voteRate: '4.5', category: 'Ho Chi Minh City', description: 'A cozy place with the best brews in Saigon.' },
  { id: 2, name: 'Hanoi Beans', voteRate: '4.7', category: 'Hanoi', description: "Experience the rich flavors of Hanoi's finest beans." },
  { id: 3, name: 'Da Nang Delight', voteRate: '4.6', category: 'Da Nang', description: 'A delightful spot to enjoy coffee in Da Nang.' },
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

  // Check if the coffee shop vote rates are rendered
  expect(await screen.findByText('4.5')).toBeInTheDocument();
  expect(await screen.findByText('4.7')).toBeInTheDocument();
  expect(await screen.findByText('4.6')).toBeInTheDocument();

  // Check if the coffee shop descriptions are rendered
  expect(await screen.findByText('A cozy place with the best brews in Saigon.')).toBeInTheDocument();
  expect(await screen.findByText("Experience the rich flavors of Hanoi's finest beans.")).toBeInTheDocument();
  expect(await screen.findByText('A delightful spot to enjoy coffee in Da Nang.')).toBeInTheDocument();

  // Check if the coffee shop locations are rendered
  expect(await screen.findByText('Ho Chi Minh City')).toBeInTheDocument();
  expect(await screen.findByText('Hanoi')).toBeInTheDocument();
  expect(await screen.findByText('Da Nang')).toBeInTheDocument();
});