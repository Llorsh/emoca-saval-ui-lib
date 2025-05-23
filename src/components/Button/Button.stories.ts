import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Button from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primario: Story = {
  args: {
    buttonType: "primary",
    children: 'Button',
    type: 'button',
  },
};

export const Primario_Medicos: Story = {
  args: {
    buttonType: "primaryDoctor",
    size: 'base',
    children: 'Button',
    type: 'button',
  },
};

export const Secundario: Story = {
  args: {
    buttonType: "secondary",
    children: 'Button',
    type: 'button',
  },
};

export const Outline: Story = {
  args: {
    buttonType: "outline",
    children: 'Button',
    type: 'button',
  },
};

export const Texto: Story = {
  args: {
    buttonType: "text",
    children: 'Button',
    type: 'button',
  },
};

