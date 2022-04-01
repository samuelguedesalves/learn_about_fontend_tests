import { render, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

describe('app component', () => {
  it('should render list items', () => {
    const { getByText } = render(<App />);

    expect(getByText('gabriel')).toBeInTheDocument();
    expect(getByText('matheus')).toBeInTheDocument();
    expect(getByText('wigny')).toBeInTheDocument();
  });

  it('should be able to add new item to the list', async () => {
    const { getByText, getByPlaceholderText, findByText } = render(<App />);

    const input = getByPlaceholderText('Novo item');

    fireEvent.change(input, { target: { value: 'Novo' } });

    const button = getByText('add');

    fireEvent.click(button);

    await waitFor(async () => {
      expect(getByText('Novo')).toBeInTheDocument();
    }, { timeout: 600 });
  });

  it('should be able to add remove item to the list', async () => {
    const { queryByText, getAllByText } = render(<App />);

    const removeButtons = getAllByText('Remover');

    fireEvent.click(removeButtons[0]);

    await waitFor(() => {
      expect(queryByText('gabriel')).not.toBeInTheDocument();
    });
  });

})