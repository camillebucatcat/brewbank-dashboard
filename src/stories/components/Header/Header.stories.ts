import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';

const meta = {
  title: 'Surface/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    // control example
    // theme: {
    //   options: ['primary', 'secondary'],
    //   control: { type: 'select' },
    // },
    // disabled: {
    //   control: { type: 'boolean' },
    // },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    // add default values
  },
};
