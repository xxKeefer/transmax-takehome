import React from 'react';
import {render, screen, act} from '@testing-library/react';
import App from './App';

describe('Delayed Routes', () => {
  it('should render a collapsible list of delayed routes', () => {
    render(<App />);
    const collapse = screen.getByRole('button', {
      name: /delayed routes/i,
    });
    const route = screen.getByTitle(/eastern fwy/i);
    // it should be closed by default
    expect(collapse).toBeInTheDocument();
    expect(route).toBeInTheDocument();
    expect(collapse.parentElement).toHaveClass('collapse-close');

    // it should open when clicked
    act(() => {
      collapse.click();
    });
    expect(collapse.parentElement).toHaveClass('collapse-open');

    // it should close when clicked again
    act(() => {
      collapse.click();
    });
    expect(collapse.parentElement).toHaveClass('collapse-close');
  });
});
