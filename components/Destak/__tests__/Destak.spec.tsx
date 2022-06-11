import React from 'react';
import { render, screen } from '@testing-library/react';

import { Destak } from '../Destak';

describe('Destak', () => {
  test('renders Destak component', () => {
    render(<Destak>Content</Destak>);

    expect(screen.getByText('Content')).toBeTruthy();
  });
});

