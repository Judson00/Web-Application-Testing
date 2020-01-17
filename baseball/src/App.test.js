import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App'

describe('Render without crashing', () => {
  test('renders without crashing', () => {
    render(<App />)
  });
})

describe('Strikes header renders', () => {
    test('Strikes header is found', () => {
    const { getByTestId } = render(<App />)

    getByTestId(/strikes-header/i)
  })
})

describe('Fouls header renders', () => {
  test('Fouls header is found', () => {
  const { getByTestId } = render(<App />)

  getByTestId(/fouls-header/i)
})
})

describe('Balls header renders', () => {
  test('Balls header is found', () => {
  const { getByTestId } = render(<App />)

  getByTestId(/balls-header/i)
})
})
