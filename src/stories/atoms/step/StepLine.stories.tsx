import { Meta, StoryObj } from '@storybook/react';
import { StepLine } from '../../../components';

const meta: Meta<typeof StepLine> = {
  title: 'atoms/step/StepLine',
  component: StepLine,
  args: {
    type: 'line',
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['dotted', 'line'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof StepLine>;

export const Default: Story = {
  parameters: {
    backgrounds: {
      default: 'red-rimac',
      values: [{ name: 'red-rimac', value: '#f7052d' }],
    },
  },
};

export const Dotted: Story = {
  args: {
    type: 'dotted',
  },
  parameters: {
    backgrounds: {
      default: 'red-rimac',
      values: [{ name: 'red-rimac', value: '#f7052d' }],
    },
  },
};

export const Line: Story = {
  args: {
    type: 'line',
  },
  parameters: {
    backgrounds: {
      default: 'red-rimac',
      values: [{ name: 'red-rimac', value: '#f7052d' }],
    },
  },
};
