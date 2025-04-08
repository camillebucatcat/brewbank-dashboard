import type { Meta, StoryObj } from '@storybook/react';

import { Toggle } from './Toggle';

const meta = {
  title: 'Form/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    checked: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Controls the checked state of the toggle',
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};

export const Labeled: Story = {
  args: {
    label: "Super label"
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
