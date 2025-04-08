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
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    orientation: 'vertical',
    links: [
      { id:'dashboard', href: '/', label: 'Dashboard', icon: 'Dashboard' },
      { id: 'coffee', href: '/menu', label: 'Menu', icon: 'Coffee' },
      { id: 'clipboard', href: '/report', label: 'Report', icon: 'ClipboardText' },
    ],
  },
};

export const Vertical : Story = {
  args: {
    orientation: 'vertical',
    links: [
      { id:'dashboard', href: '/', label: 'Dashboard', icon: 'Dashboard' },
      { id: 'coffee', href: '/menu', label: 'Menu', icon: 'Coffee' },
      { id: 'clipboard', href: '/report', label: 'Report', icon: 'ClipboardText' },
    ],
  },
};

export const Horizontal : Story = {
  args: {
    orientation: 'horizontal',
    links: [
      { id:'dashboard', href: '/', label: 'Dashboard', icon: 'Dashboard' },
      { id: 'coffee', href: '/menu', label: 'Menu', icon: 'Coffee' },
      { id: 'clipboard', href: '/report', label: 'Report', icon: 'ClipboardText' },
    ],
  },
};

export const Active: Story = {
  args: {
    orientation: 'horizontal',
    links: [
      { id:'dashboard', href: '/', label: 'Dashboard', icon: 'Dashboard' },
      { id: 'coffee', href: '/menu', label: 'Menu', icon: 'Coffee' },
      { id: 'clipboard', href: '/report', label: 'Report', icon: 'ClipboardText' },
    ],
  },
};
