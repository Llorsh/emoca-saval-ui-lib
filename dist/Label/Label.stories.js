import React from 'react';
import Label from './Label';
import LabelSVG from '@/components/Svg/Label';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Atoms/Label',
    component: Label,
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
};
export default meta;
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Aprobado = {
    args: {
        text: 'Aprobado',
        status: 'approved',
    },
};
export const Pendiente = {
    args: {
        text: 'Pendiente',
        status: 'pending',
    },
};
export const Rechazado = {
    args: {
        text: 'Rechazado',
        status: 'rejected',
    },
};
export const Desabilitado = {
    args: {
        text: 'Desabilitado',
        status: 'disabled',
    },
};
export const Info = {
    args: {
        text: 'FAVORITOS',
        status: 'info',
        svg: React.createElement(LabelSVG)
    },
};
