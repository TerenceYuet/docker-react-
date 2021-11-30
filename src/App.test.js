import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const featureElement = getByText(/feature/i);
  expect(featureElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const featureElement = getByText(/feature/i);
  expect(featureElement).toBeInTheDocument();
});
