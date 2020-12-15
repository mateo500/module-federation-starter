import React from 'react';
import { render, screen } from '@testing-library/react';
import Source from '../Source';

test('renders text passed by props', () => {
  render(<Source name='hello world' />);
  const textInComponent = screen.getByText(/hello world/i);
  expect(textInComponent).toBeInTheDocument();
});
