import { render, screen } from '@testing-library/react';
import { Heading } from '@/components/common/Heading';

jest.mock('@/constants', () => ({}));

describe('Heading', () => {
  it('renders children text', () => {
    render(<Heading>My Heading</Heading>);
    expect(screen.getByText('My Heading')).toBeInTheDocument();
  });

  it('renders as h2 by default', () => {
    render(<Heading>Default</Heading>);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('renders as h1 when as=h1', () => {
    render(<Heading as="h1">Page Title</Heading>);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders as h3 when as=h3', () => {
    render(<Heading as="h3">Section</Heading>);
    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
  });

  it('applies display size class', () => {
    const { container } = render(<Heading size="display">Big</Heading>);
    expect(container.firstChild).toHaveClass('text-display');
  });

  it('applies heading size class', () => {
    const { container } = render(<Heading size="heading">H</Heading>);
    expect(container.firstChild).toHaveClass('text-heading');
  });

  it('applies additional className', () => {
    const { container } = render(<Heading className="extra">Text</Heading>);
    expect(container.firstChild).toHaveClass('extra');
  });

  it('sets the id attribute', () => {
    render(<Heading id="section-1">Section</Heading>);
    expect(screen.getByRole('heading')).toHaveAttribute('id', 'section-1');
  });
});
