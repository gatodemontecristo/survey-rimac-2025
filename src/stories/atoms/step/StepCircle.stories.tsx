import { Meta, StoryObj } from '@storybook/react';
import { StepCircle } from '../../../components';

export default {
  title: 'atoms/step/StepCircle',
  component: StepCircle,
  argTypes: {
    title: { control: 'text' },
    state: { control: 'radio', options: ['inactive', 'active', 'completed'] },
    img: { control: 'text' },
  },
} as Meta;

type Story = StoryObj<typeof StepCircle>;

export const Inactive: Story = {
  args: {
    title: 'Step 1',
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
    title: 'Step 2',
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
    title: 'Step 3',
    state: 'completed',
  },
  parameters: {
    backgrounds: {
      default: 'red-rimac',
      values: [{ name: 'red-rimac', value: '#f7052d' }],
    },
  },
};
