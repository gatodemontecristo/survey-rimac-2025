import type { Meta, StoryObj } from '@storybook/react';
import { RefreshRimac } from '../../../components';

const meta: Meta<typeof RefreshRimac> = {
  title: 'atoms/form/RefreshRimac',
  component: RefreshRimac,
  argTypes: {
    fnClick: { action: 'clicked' },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof RefreshRimac>;

export const Default: Story = {
  args: {
    className: '',
  },
};
