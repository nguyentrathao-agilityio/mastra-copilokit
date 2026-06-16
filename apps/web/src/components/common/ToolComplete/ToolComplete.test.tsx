import { render, screen } from '@testing-library/react';
import { ToolComplete } from '.';

describe('ToolComplete', () => {
  it('renders a finished tool status with the provided tool name', () => {
    render(<ToolComplete toolName="destination" />);
    expect(screen.getByText('Finished running destination.')).toBeInTheDocument();
  });
});
