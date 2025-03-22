import type { Meta, StoryObj } from '@storybook/react';
import { ButtomMobile } from '../../../components';

const meta: Meta<typeof ButtomMobile> = {
  title: 'atoms/form/ButtomMobile',
  component: ButtomMobile,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    text: { control: 'text' },
    fnClick: { action: 'clicked' },
    className: { control: 'text' },
    isNav: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof ButtomMobile>;

export const Default: Story = {
  args: {
    text: 'Click Me',
    fnClick: () => {},
    isNav: false,
  },
};

export const NavigationButton: Story = {
  args: {
    fnClick: () => {},
    isNav: true,
  },
};
