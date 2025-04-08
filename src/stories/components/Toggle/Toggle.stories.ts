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
  name: "State: Checked",
  args: {
    checked: true,
  },
};

export const Unchecked: Story = {
  name: "State: Unchecked",
  args: {
    checked: false,
  },
};

export const Disabled: Story = {
  name: "State: Disabled",
  args: {
    disabled: true,
  },
};


export const CheckedDisabled: Story = {
  name: "State: Checked, disabled",
  args: {
    checked: true,
    disabled: true,
  },
};

export const UncheckDisabled: Story = {
  name: "State: Unchecked, disabled",
  args: {
    checked: false,
    disabled: true,
  },
};
