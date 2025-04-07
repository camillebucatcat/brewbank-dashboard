import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { TextBox } from "./TextBox";
import * as icons from "@/assets/svg";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/TextBox",
  component: TextBox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    iconStart: {
      options: ["", ...Object.keys(icons)],
      control: { type: "select" },
    },
    iconEnd: {
      options: ["", ...Object.keys(icons)],
      control: { type: "select" },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onChange: fn() },
} satisfies Meta<typeof TextBox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    label: "Default",
    id: "textbox",
  },
};
export const Inline: Story = {
  args: {
    label: "Inline",
    inline: true,
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Small",
    id: "textbox",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    label: "Medium",
    id: "textbox",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Large",
    id: "textbox",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Disabled",
    id: "textbox",
  },
};

export const IconStart: Story = {
  args: {
    label: "Icon Start",
    iconStart: "Heart",
  },
};

export const IconEnd: Story = {
  args: {
    label: "Icon End",
    iconEnd: "Heart",
  },
};
