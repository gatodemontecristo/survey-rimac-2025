import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ItemOption } from '../../../types';
import { CheckboxRimac } from '../../../components';

const meta: Meta<typeof CheckboxRimac> = {
  title: 'atoms/form/CheckboxRimac',
  component: CheckboxRimac,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    options: { control: 'object' },
    selectedValues: { control: 'check' },
    onChange: { action: 'changed' },
  },
};

export default meta;

type Story = StoryObj<typeof CheckboxRimac>;

const options: ItemOption[] = [
  { label: 'Opción 1', value: 'option1' },
  { label: 'Opción 2', value: 'option2' },
  { label: 'Opción 3', value: 'option3' },
];

const Template: Story = {
  render: (args) => {
    const [selectedValues, setSelectedValues] = useState<string[]>(
      args.selectedValues,
    );
    return (
      <CheckboxRimac
        {...args}
        selectedValues={selectedValues}
        onChange={setSelectedValues}
      />
    );
  },
};

export const Default: Story = {
  ...Template,
  args: {
    options,
    selectedValues: [],
  },
};

export const PreSelected: Story = {
  ...Template,
  args: {
    options,
    selectedValues: ['option1', 'option3'],
  },
};
