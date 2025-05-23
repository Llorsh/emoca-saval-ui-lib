import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ text, status, svg, ...props }: import("./Label").LabelProps) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Aprobado: Story;
export declare const Pendiente: Story;
export declare const Rechazado: Story;
export declare const Desabilitado: Story;
export declare const Info: Story;
