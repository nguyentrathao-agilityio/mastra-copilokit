import type { Meta, StoryObj } from '@storybook/react';
import { ToolComplete } from '.';

const meta: Meta<typeof ToolComplete> = {
  component: ToolComplete,
  title: 'Common/ToolComplete',
};

export default meta;

type Story = StoryObj<typeof ToolComplete>;

export const Default: Story = {
  args: {
    action: 'exploring',
    target: 'destination',
  },
};
