import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PlayerCard from './components/PlayerCard'
import NavBar from './components/NavBar'
import { fireEvent, render, cleanup, act, screen, fetchData } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders header text', () => {
  const { queryByText } = render(<App />);
  const hasHeaderText = queryByText(/Women's World Cup players/i);
});



// App div
test('renders the PlayerCards', () => {
  // Arrange
  const { getByTestId } = render(<App />);

  // Act
  const playerCards = getByTestId(/playercards/i);

  // Assert
  expect(playerCards).toBeInTheDocument();
})


