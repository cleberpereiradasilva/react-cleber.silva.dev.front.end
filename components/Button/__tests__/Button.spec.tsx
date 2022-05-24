import React from 'react';
import { render, screen } from '@testing-library/react';

import { Button } from '../Button';

describe('Button', () => {
  test('renders Button component', () => {
    render(<Button />);

    expect(screen.getByText('Button')).toBeTruthy();
  });
});

