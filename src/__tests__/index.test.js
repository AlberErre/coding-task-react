import '../../setupTests';

import React from 'react';
import { axe } from 'jest-axe';

import { render, screen } from '@testing-library/react';

import IndexPage from '../pages/index';

test('loads and displays main page', async () => {
  render(<IndexPage />);

  expect(screen.getByText('Shows by Genre (1031)')).toBeTruthy();
});

test('does not have accessibility issues', async () => {
  const renderResult = render(<IndexPage />);

  const results = await axe(renderResult.container);

  expect(results).toHaveNoViolations();
});
