import type { Meta, StoryObj } from '@storybook/react';
import { StepBigCircle } from '../../../components';

const meta: Meta<typeof StepBigCircle> = {
  title: 'atoms/step/StepBigCircle',
  component: StepBigCircle,
  argTypes: {
    title: { control: 'text' },
    state: {
      control: 'radio',
      options: ['inactive', 'active', 'completed'],
    },
    img: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof StepBigCircle>;

export const Inactive: Story = {
  args: {
    title: 'Step Inactive',
    state: 'inactive',
    img: '../icons/svgexport-118.svg',
  },
  parameters: {
    backgrounds: {
      default: 'red-rimac',
      values: [{ name: 'red-rimac', value: '#f7052d' }],
    },
  },
};

export const Active: Story = {
  args: {
    title: 'Step Active',
    state: 'active',
    img: '../icons/svgexport-118-dark.svg',
  },
  parameters: {
    backgrounds: {
      default: 'red-rimac',
      values: [{ name: 'red-rimac', value: '#f7052d' }],
    },
  },
};

export const Completed: Story = {
  args: {
    title: 'Step Completed',
    state: 'completed',
  },
  parameters: {
    backgrounds: {
      default: 'red-rimac',
      values: [{ name: 'red-rimac', value: '#f7052d' }],
    },
  },
};
