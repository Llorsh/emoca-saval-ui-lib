import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import Label from './Label';
import LabelSVG from '@/components/Svg/Label';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Atoms/Label',
  component: Label,
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
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Aprobado: Story = {
  args: {
    text: 'Aprobado',
    status: 'approved',
  },
};

export const Pendiente: Story = {
  args: {
    text: 'Pendiente',
    status: 'pending',
  },
};

export const Rechazado: Story = {
  args: {
    text: 'Rechazado',
    status: 'rejected',
  },
};

export const Desabilitado: Story = {
  args: {
    text: 'Desabilitado',
    status: 'disabled',
  },
};

export const Info: Story = {
  args: {
    text: 'FAVORITOS',
    status: 'info',
    svg: React.createElement(LabelSVG)
  },
};
