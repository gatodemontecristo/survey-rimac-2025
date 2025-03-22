import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InputSelect, Option } from '../../../components';

const meta: Meta<typeof InputSelect> = {
  title: 'atoms/form/InputSelect',
  component: InputSelect,
  argTypes: {
    options: { control: 'object' },
    placeholder: { control: 'text' },
    value: { control: 'object' },
    onChange: { action: 'changed' },
  },
};

export default meta;

type Story = StoryObj<typeof InputSelect>;

const options: Option[] = [
  { label: 'Opción 1', value: 'option1' },
  { label: 'Opción 2', value: 'option2' },
  { label: 'Opción 3', value: 'option3' },
];

const Template: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState<Option | null>(
      args.value,
    );
    return (
      <InputSelect
        {...args}
        value={selectedValue}
        onChange={setSelectedValue}
      />
    );
  },
};

export const Default: Story = {
  ...Template,
  args: {
    options,
    placeholder: 'Seleccione una opción',
    value: null,
  },
};

export const PreSelected: Story = {
  ...Template,
  args: {
    options,
    placeholder: 'Seleccione una opción',
    value: options[1],
  },
};
