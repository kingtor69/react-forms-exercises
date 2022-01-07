import { render } from '@testing-library/react';
import Box from './Box';

it('renders witout ceashing', () => {
  render(<Box />);
});

it('renders snapshot', () => {
  const { asFragment } = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
});

it('renders a new box', () => {
  const newBox = {
    color: "red",
    width: "90",
    height: "150px"
  };
  const { getByTestId } = 
    render(<Box 
      color={newBox.color}
      width={newBox.width}
      height={newBox.height}
      testId={"testBox1"}
    />);
  const newBoxDiv = getByTestId("testBox1");
  expect(newBoxDiv).toBeInTheDocument();
  expect(newBoxDiv.className).toBe('Box');
  expect(newBoxDiv.style.backgroundColor).toBe("red");
})