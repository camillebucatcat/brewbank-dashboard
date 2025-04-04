import type { Meta, StoryObj } from '@storybook/react';

import { Colors } from './Colors';

const meta = {
  title: 'Design Tokens/Colors',
  component: Colors,
} satisfies Meta<typeof Colors>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
};
