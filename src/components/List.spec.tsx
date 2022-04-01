import { render, fireEvent, waitFor, queryByText, screen } from '@testing-library/react';
import List from './List';

describe('app component', () => {
  it('should render list items', () => {
    render(<List initialItems={['batata', 'banana', 'caju']} />);

    expect(screen.getByText('batata')).toBeInTheDocument();
    expect(screen.getByText('banana')).toBeInTheDocument();
    expect(screen.getByText('caju')).toBeInTheDocument();
  });

  it('should be able to add new item to the list', async () => {
    render(<List initialItems={[]} />);

    fireEvent.change(
      screen.getByPlaceholderText('Novo item'),
      { target: { value: 'Morango' } }
    );

    fireEvent.click(screen.getByText('add'));

    await waitFor(async () => {
      expect(screen.getByText('Morango')).toBeInTheDocument();
    }, { timeout: 600 });
  });

  it('should be able to add remove item to the list', async () => {
    render(<List initialItems={['batata']} />);

    fireEvent.click(screen.getAllByText('Remover')[0]);

    await waitFor(() => {
      expect(screen.queryByText('batata')).not.toBeInTheDocument();
    });
  });

})