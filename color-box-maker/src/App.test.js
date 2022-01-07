import { render, asFragment } from '@testing-library/react';
import App from './App';

it('renders witout ceashing', () => {
  render(<App />);
});

it('renders snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
})