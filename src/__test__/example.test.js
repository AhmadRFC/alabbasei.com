// example.test.js

import React from 'react';
import { render } from '@testing-library/react';
import ExampleComponent from './ExampleComponent';

test('renders ExampleComponent correctly', () => {
  const { getByText } = render(<ExampleComponent />);
  const textElement = getByText('Example Text');
  expect(textElement).toBeInTheDocument();
});
