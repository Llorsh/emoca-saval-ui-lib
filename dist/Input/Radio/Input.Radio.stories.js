import Radio from './Radio';
const meta = {
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
export const Checked = {
    args: {
        defaultChecked: true,
        name: "radio",
    },
};
export const Unchecked = {
    args: {
        defaultChecked: false,
        name: "radio",
    },
};
