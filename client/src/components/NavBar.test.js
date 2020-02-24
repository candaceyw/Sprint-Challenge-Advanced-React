import React from 'react'
import NavBar from './NavBar'
import { fireEvent, render, cleanup, act } from '@testing-library/react'
import renderer from 'react-test-renderer';
// import axiosMock from 'axios'
import '@testing-library/jest-dom/extend-expect';


test('change values via the fireEvent.change method', () => {
    const handleChange = jest.fn()
    const { container } = render(<input type="checkbox" onChange={() => setDarkMode(prevMode => !prevMode)} />)
    const input = container.firstChild
    fireEvent.change(input, { target: { value: false } })
    expect(input.value).toBe('false')
  })

  test('renders toggle', () => {
    // Arrange
    const { getByTestId } = render(<NavBar />);

  // Act
  const toggle = getByTestId(/Toggle/i);

  // Assert
  expect(toggle).toBeInTheDocument();
  })


  test('is clickable', () => {
    // Arrange
    const spy = jest.fn();
    const { getByTestId } = render(<NavBar />);
  
    // Act
    const checkbox = getByTestId(/checkbox/i);
    checkbox.onclick = spy;
    fireEvent.click(checkbox);
  
    // Assert
    expect(spy).toHaveBeenCalledTimes(1);
  })



describe('NavBar', () => {
    test('snapshot renders', () => {
      const component = renderer.create(<NavBar />);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });