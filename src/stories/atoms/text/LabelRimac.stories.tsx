import { Meta, StoryObj } from '@storybook/react';
import { LabelRimac } from '../../../components';

const meta: Meta<typeof LabelRimac> = {
  title: 'atoms/text/LabelRimac',
  component: LabelRimac,
  args: {
    text: 'Regular text',
    special: 'Highlighted',
    size: 'text-2xl',
    reverse: false,
  },
  argTypes: {
    text: { control: 'text' },
    special: { control: 'text' },
    size: {
      control: 'select',
      options: ['text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl'],
    },
    reverse: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof LabelRimac>;

export const Default: Story = {};
