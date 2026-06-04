import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Card, CardHeader, CardFooter } from '@/components/common/Card';

describe('Card', () => {
  it('renders children', () => {
    render(<Card>card content</Card>);
    expect(screen.getByText('card content')).toBeInTheDocument();
  });

  it('has no role by default when not clickable', () => {
    const { container } = render(<Card>content</Card>);
    expect(container.firstChild).not.toHaveAttribute('role');
  });

  it('has role=button when onClick is provided', () => {
    render(<Card onClick={jest.fn()}>content</Card>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    render(<Card onClick={onClick}>click me</Card>);
    await user.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('calls onClick when Enter key is pressed', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    render(<Card onClick={onClick}>press enter</Card>);
    screen.getByRole('button').focus();
    await user.keyboard('{Enter}');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('applies selected border class when isSelected=true', () => {
    const { container } = render(<Card isSelected>selected</Card>);
    expect(container.firstChild).toHaveClass('border-border-info');
  });

  it('applies default border class when isSelected=false', () => {
    const { container } = render(<Card>default</Card>);
    expect(container.firstChild).toHaveClass('border-border-tertiary');
  });

  it('applies additional className', () => {
    const { container } = render(<Card className="custom">content</Card>);
    expect(container.firstChild).toHaveClass('custom');
  });
});

describe('CardHeader', () => {
  it('renders the title', () => {
    render(<CardHeader title="Da Nang" />);
    expect(screen.getByText('Da Nang')).toBeInTheDocument();
  });

  it('renders the subtitle when provided', () => {
    render(<CardHeader title="Da Nang" subtitle="Vietnam" />);
    expect(screen.getByText('Vietnam')).toBeInTheDocument();
  });

  it('does not render subtitle when omitted', () => {
    render(<CardHeader title="Da Nang" />);
    expect(screen.queryByText('Vietnam')).not.toBeInTheDocument();
  });

  it('renders badgeSlot when provided', () => {
    render(<CardHeader title="Hotel" badgeSlot={<span>Best</span>} />);
    expect(screen.getByText('Best')).toBeInTheDocument();
  });
});

describe('CardFooter', () => {
  it('renders left slot content', () => {
    render(<CardFooter left={<span>Left</span>} />);
    expect(screen.getByText('Left')).toBeInTheDocument();
  });

  it('renders right slot content', () => {
    render(<CardFooter right={<span>Right</span>} />);
    expect(screen.getByText('Right')).toBeInTheDocument();
  });

  it('renders both slots', () => {
    render(<CardFooter left={<span>L</span>} right={<span>R</span>} />);
    expect(screen.getByText('L')).toBeInTheDocument();
    expect(screen.getByText('R')).toBeInTheDocument();
  });

  it('renders without slots', () => {
    const { container } = render(<CardFooter />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
