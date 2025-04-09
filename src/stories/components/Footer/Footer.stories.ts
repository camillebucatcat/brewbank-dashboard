import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from './Footer';

const meta = {
  title: 'Surface/Footer',
  component: Footer,
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
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // add default values
  },
};
