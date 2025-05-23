import React, { useState } from 'react';
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

const SearchInputWithState = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <SearchInput value={value} setValue={setValue} />
      <div className="mt-4 text-sm text-gray-600">
        Valor actual: <span className="font-mono">"{value}"</span>
      </div>
    </div>
  );
};

export const Default: Story = {
  render: () => <SearchInputWithState />
};

const WithInitialValueTemplate = () => {
  const [value, setValue] = useState('Texto de búsqueda inicial');
  return (
    <div>
      <SearchInput value={value} setValue={setValue} />
      <div className="mt-4 text-sm text-gray-600">
        Valor actual: <span className="font-mono">"{value}"</span>
      </div>
    </div>
  );
};

export const WithInitialValue: Story = {
  render: () => <WithInitialValueTemplate />
};
