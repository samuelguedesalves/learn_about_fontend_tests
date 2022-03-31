import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('app component', () => {
  it('should render list items', () => {
    const { getByText } = render(<App />);

    expect(getByText('gabriel')).toBeInTheDocument();
    expect(getByText('matheus')).toBeInTheDocument();
    expect(getByText('wigny')).toBeInTheDocument();
  });

  it('should be able to add new item to the list', () => {
    const { getByText, getByPlaceholderText } = render(<App />);

    const input = getByPlaceholderText('Novo item');

    fireEvent.change(input, { target: { value: 'Novo' } });

    const button = getByText('add');

    fireEvent.click(button);

    expect(getByText('Novo')).toBeInTheDocument();
  })

})