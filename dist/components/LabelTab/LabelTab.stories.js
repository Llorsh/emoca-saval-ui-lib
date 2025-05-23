import LabelTab from './LabelTab';
const meta = {
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
export const Inactive = {
    args: {
        text: 'Label',
        isActive: false,
    },
};
export const Active = {
    args: {
        text: 'Label',
        isActive: true,
    },
};
