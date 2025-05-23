import type { Meta, StoryObj } from '@storybook/react';
import LabelTab from './LabelTab';

const meta: Meta<typeof LabelTab> = {
  title: 'Atoms/LabelTab',
  component: LabelTab,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    text: { control: 'text' },
    isActive: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof LabelTab>;

export const Inactive: Story = {
  args: {
    text: 'Label',
    isActive: false,
  },
};

export const Active: Story = {
  args: {
    text: 'Label',
    isActive: true,
  },
};
