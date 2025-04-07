import type { Meta, StoryObj } from '@storybook/react';

import { Navigation } from './Navigation';

const meta = {
  title: 'Navigation/Navigation',
  component: Navigation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      options: ['vertical', 'horizontal'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    orientation: 'vertical',
    links: [
      { href: '/', label: 'Dashboard', icon: 'Dashboard' },
      { href: '/menu', label: 'Menu', icon: 'Coffee' },
      { href: '/report', label: 'Report', icon: 'ClipboardText' },
    ],
  },
};
