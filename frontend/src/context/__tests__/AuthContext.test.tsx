import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AuthProvider } from '../AuthContext';

describe('AuthContext', () => {
  it('should render children without crashing', () => {
    const { getByText } = render(
      <AuthProvider>
        <div>Test</div>
      </AuthProvider>
    );
    expect(getByText('Test')).toBeInTheDocument();
  });
});
