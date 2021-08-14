import '@testing-library/jest-dom/extend-expect';

import * as nextRouter from 'next/router';

nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({
  push: jest.fn(),
  basePath: '',
  pathname: '/',
  route: '/',
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn().mockResolvedValue(undefined),
}));

import { toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/react';

import { LikedGenresProvider } from './src/context/LikedGenres';

expect.extend(toHaveNoViolations);

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

//NOTE: we use this customRender for testing to inject LikedGenresProvider on test environment
export const customRender = async (component) => {
  const wrapper = ({ children }) => {
    return <LikedGenresProvider>{children}</LikedGenresProvider>;
  };

  return render(component, { wrapper });
};
