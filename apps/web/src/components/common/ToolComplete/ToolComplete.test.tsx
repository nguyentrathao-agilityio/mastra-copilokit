import { render, screen } from '@testing-library/react';
import { ToolComplete } from '.';

describe('ToolComplete', () => {
  it('renders a finished tool status with the provided target', () => {
    render(<ToolComplete action="exploring" target="destination" />);
    expect(screen.getByText('Finished exploring destination.')).toBeInTheDocument();
  });
});
