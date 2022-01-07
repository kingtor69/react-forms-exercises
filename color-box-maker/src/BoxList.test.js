import { render } from '@testing-library/react';
import BoxList from './BoxList';

it('renders witout ceashing', () => {
  render(<BoxList />);
});

it('renders snapshot', () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});
