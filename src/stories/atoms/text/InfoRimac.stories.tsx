import { Meta, StoryObj } from '@storybook/react';
import { InfoRimac } from '../../../components';

const meta: Meta<typeof InfoRimac> = {
  title: 'atoms/text/InfoRimac',
  component: InfoRimac,
  args: {
    text: 'This is an informative text.\nYou can add line breaks!',
    className: '',
    size: 'text-xl',
  },
  argTypes: {
    text: { control: 'text' },
    className: { control: 'text' },
    size: {
      control: 'select',
      options: ['text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof InfoRimac>;

export const Default: Story = {};
