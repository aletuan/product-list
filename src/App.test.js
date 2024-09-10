import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // Check if the header is rendered
  const headerElement = screen.getByText(/Our Exclusive Product Range/i);
  expect(headerElement).toBeInTheDocument();
});
