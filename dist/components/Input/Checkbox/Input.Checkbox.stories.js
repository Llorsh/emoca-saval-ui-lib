import Checkbox from './Checkbox';
const meta = {
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
export const Checked = {
    args: {
        defaultChecked: true,
        name: "checkbox",
    },
};
export const Unchecked = {
    args: {
        defaultChecked: false,
        name: "checkbox",
    },
};
