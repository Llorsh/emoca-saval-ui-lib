import Toggle from './ToggleSwitch';
const meta = {
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
export const Checked = {
    args: {
        defaultChecked: true,
        name: "toggle",
    },
};
export const Unchecked = {
    args: {
        defaultChecked: false,
        name: "toggle",
    },
};
