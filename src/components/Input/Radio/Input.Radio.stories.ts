import type { Meta, StoryObj } from '@storybook/react';
import Radio from './Radio';

const meta: Meta<typeof Radio> = {
    title: 'Atoms/Input/Radio',
    component: Radio,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        defaultChecked: {
            control: 'boolean',
        },
        name: {
            control: 'text',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Checked: Story = {
    args: {
        defaultChecked: true,
        name: "radio",
    },
};

export const Unchecked: Story = {
    args: {
        defaultChecked: false,
        name: "radio",
    },
};
