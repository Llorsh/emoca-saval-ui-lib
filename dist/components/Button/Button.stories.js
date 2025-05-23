import { fn } from '@storybook/test';
import Button from './Button';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Atoms/Button',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
    // backgroundColor: { control: 'color' },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onClick: fn() },
};
export default meta;
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primario = {
    args: {
        buttonType: "primary",
        label: 'Button',
        type: 'button',
    },
};
export const Primario_Medicos = {
    args: {
        buttonType: "primaryDoctor",
        size: 'base',
        label: 'Button',
        type: 'button',
    },
};
export const Secundario = {
    args: {
        buttonType: "secondary",
        label: 'Button',
        type: 'button',
    },
};
export const Outline = {
    args: {
        buttonType: "outline",
        label: 'Button',
        type: 'button',
    },
};
export const Texto = {
    args: {
        buttonType: "text",
        label: 'Button',
        type: 'button',
    },
};
