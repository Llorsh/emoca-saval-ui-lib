import type { Meta, StoryObj } from '@storybook/react';
import Toggle from './ToggleSwitch';

const meta: Meta<typeof Toggle> = {
    title: 'Atoms/Input/Toggle',
    component: Toggle,
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

type Story = StoryObj<typeof Toggle>;

export const Checked: Story = {
    args: {
        defaultChecked: true,
        name: "toggle",
    },
};

export const Unchecked: Story = {
    args: {
        defaultChecked: false,
        name: "toggle",
    },
};
