// App.test.js
import { render, screen } from '@testing-library/react';
import App from './App.js';

test('renders learn react link', async () => {
  render(<App />);
  
  // Use findByRole with await to handle timing issues
  const linkElement = await screen.findByRole('link', { name: /learn react/i });
  
  // Assert that the linkElement is present in the document
  expect(linkElement).toBeInTheDocument();
});
