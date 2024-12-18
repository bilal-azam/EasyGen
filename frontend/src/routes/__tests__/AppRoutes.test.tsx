import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import AppRoutes from '../AppRoutes';

describe('AppRoutes', () => {
  it('should render SignIn by default', () => {
    const { getByText } = render(
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    );
    expect(getByText(/Sign In/i)).toBeInTheDocument();
  });
});
