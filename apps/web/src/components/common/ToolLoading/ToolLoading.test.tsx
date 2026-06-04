import { render, screen } from '@testing-library/react';
import { ToolLoading } from '.';

describe('ToolLoading', () => {
  it('renders with the correct tool name', () => {
    render(<ToolLoading toolName="flights" />);
    expect(screen.getByText('Searching for flights...')).toBeInTheDocument();
  });
});
