import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SearchInput from './SearchInput';

const meta: Meta<typeof SearchInput> = {
  title: 'Atoms/SearchInput',
  component: SearchInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  args: {
    value: '',
    setValue: (value) => console.log('Search value:', value),
  },
};

export const WithInitialValue: Story = {
  args: {
    value: 'Initial search text',
    setValue: (value) => console.log('Search value:', value),
  },
};
