import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
    title: 'Atoms/Input/Checkbox',
    component: Checkbox,
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

type Story = StoryObj<typeof Checkbox>;

export const Checked: Story = {
    args: {
        defaultChecked: true,
        name: "checkbox",
    },
};

export const Unchecked: Story = {
    args: {
        defaultChecked: false,
        name: "checkbox",
    },
};
