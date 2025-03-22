import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InputRimac } from '../../../components';

const meta: Meta<typeof InputRimac> = {
  title: 'atoms/form/InputRimac',
  component: InputRimac,
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'text' },
    type: { control: { type: 'radio', options: ['decimal', 'number'] } },
    onChange: { action: 'changed' },
  },
};

export default meta;

type Story = StoryObj<typeof InputRimac>;

const Template: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return <InputRimac {...args} value={value} onChange={setValue} />;
  },
};

export const DecimalInput: Story = {
  ...Template,
  args: {
    placeholder: 'Ingrese un número decimal',
    type: 'decimal',
    value: '',
  },
};

export const NumberInput: Story = {
  ...Template,
  args: {
    placeholder: 'Ingrese un número entero',
    type: 'number',
    value: '',
  },
};

export const TextInput: Story = {
  ...Template,
  args: {
    placeholder: 'Ingrese solo texto',
    type: 'text',
    value: '',
  },
};
