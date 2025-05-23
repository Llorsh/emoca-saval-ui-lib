import type { Meta, StoryObj } from '@storybook/react';

import Font from './Font';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Fonts/Heading',
  component: Font,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    docs: {
      description: {
        component: 'El sistema de encabezados tipográficos está diseñado para mantener una jerarquía visual clara y coherente en toda la interfaz. Utiliza la fuente Montserrat en distintas variantes de peso y tamaños, según el nivel de importancia del texto.',
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {  },
} satisfies Meta<typeof Font>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Heading_1: Story = {
  args: {
    as: 'h1',
    children: 'Títulos del slider y secciones',
  },
};

export const Heading_2: Story = {
  args: {
    as: 'h2',
    children: 'Títulos del slider y secciones',
  },
};

export const Heading_3: Story = {
  args: {
    as: 'h3',
    children: 'Encabezado secciones',
  },
};

export const Heading_4: Story = {
  args: {
    as: 'h4',
    children: 'Encabezado elementos, modales, drawers',
  },
};

export const Heading_5: Story = {
  args: {
    as: 'h5',
    children: 'Encabezado elementos, modales, drawers',
  },
};

export const Heading_6: Story = {
  args: {
    as: 'h6',
    children: 'Encabezado cards',
  },
};

export const Paragraph: Story = {
  args: {
    as: 'p',
    children: 'Textos destacados',
  },
};
