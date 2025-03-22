import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RadioRimac } from '../../../components';

const meta: Meta<typeof RadioRimac> = {
  title: 'atoms/form/RadioRimac',
  component: RadioRimac,
  argTypes: {
    name: { control: 'text' },
    value: { control: 'text' },
    label: { control: 'text' },
    checked: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
};

export default meta;

type Story = StoryObj<typeof RadioRimac>;

const Template: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState(
      args.checked ? args.value : '',
    );
    return (
      <RadioRimac
        {...args}
        checked={selectedValue === args.value}
        onChange={setSelectedValue}
      />
    );
  },
};

export const Default: Story = {
  ...Template,
  args: {
    name: 'radio-group',
    value: 'option1',
    label: 'Opción 1',
    checked: false,
  },
};

export const Checked: Story = {
  ...Template,
  args: {
    name: 'radio-group',
    value: 'option2',
    label: 'Opción 2',
    checked: true,
  },
};
