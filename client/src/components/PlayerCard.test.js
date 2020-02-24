import React from 'react'
import PlayerCard from './PlayerCard'

import { render, fireEvent, waitForElement, getByText } from '@testing-library/react'
import renderer from 'react-test-renderer';
// import axiosMock from 'axios'







describe('PlayerCard', () => {
    test('snapshot renders', () => {
      const component = renderer.create(<PlayerCard />);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });