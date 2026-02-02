// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NexSwarmNetLinkHub title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NexSwarmNetLinkHub/i);
    expect(titleElement).toBeInTheDocument();
});
