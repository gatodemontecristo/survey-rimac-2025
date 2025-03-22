import { Meta, StoryObj } from '@storybook/react';
import { ButtonRimac } from '../../../components';
import { fn } from '@storybook/test';
const meta = {
  title: 'atoms/form/BasicButton',
  component: ButtonRimac,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    text: { control: 'text' },
    fnClick: { onClick: fn() },
    className: { control: 'text' },
    isNav: { control: 'boolean' },
  },
} satisfies Meta<typeof ButtonRimac>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    text: 'Basic button',
    fnClick: () => alert('Button clicked'),
  },
};

export const Nav: Story = {
  args: {
    isNav: true,
    fnClick: () => alert('Nav clicked'),
  },
};

export const BtnStyle: Story = {
  args: {
    text: 'Style button',
    fnClick: () => alert('Style clicked'),
    className: 'py-4 px-8 bg-blue-500 text-white',
  },
};
