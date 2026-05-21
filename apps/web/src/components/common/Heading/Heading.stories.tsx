import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from './index';

const meta: Meta<typeof Heading> = {
  title: 'Common/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'Semantic HTML tag',
    },
    size: {
      control: 'select',
      options: ['display', 'heading', 'card-title', 'option-title'],
      description: 'Typography size token',
    },
    children: { control: 'text' },
  },
  args: {
    children: 'Heading text',
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Display: Story = {
  args: { size: 'display', as: 'h1', children: 'Display heading' },
};

export const SectionHeading: Story = {
  name: 'Heading',
  args: { size: 'heading', as: 'h2', children: 'Section heading' },
};

export const CardTitle: Story = {
  args: { size: 'card-title', as: 'h3', children: 'Card title' },
};

export const OptionTitle: Story = {
  args: { size: 'option-title', as: 'h4', children: 'Option title' },
};

export const AllSizes: Story = {
  name: 'All sizes',
  render: () => (
    <div className="flex flex-col gap-4">
      <Heading size="display" as="h1">
        Display — h1
      </Heading>
      <Heading size="heading" as="h2">
        Heading — h2
      </Heading>
      <Heading size="card-title" as="h3">
        Card title — h3
      </Heading>
      <Heading size="option-title" as="h4">
        Option title — h4
      </Heading>
    </div>
  ),
};
