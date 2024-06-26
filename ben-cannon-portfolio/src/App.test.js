import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Home page link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home page/i);
  expect(linkElement).toBeInTheDocument();
});
