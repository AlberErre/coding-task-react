import React from 'react';
import { axe } from 'jest-axe';

import { screen } from '@testing-library/react';

import { customRender } from '../../setupTests';
import IndexPage from '../pages/index';

test('loads and displays main page', async () => {
  customRender(<IndexPage />);

  expect(screen.getByText('Shows by Genre (1031)')).toBeTruthy();
});

test('does not have accessibility issues', async () => {
  const renderResult = await customRender(<IndexPage />);

  const results = await axe(renderResult.container);

  expect(results).toHaveNoViolations();
});
