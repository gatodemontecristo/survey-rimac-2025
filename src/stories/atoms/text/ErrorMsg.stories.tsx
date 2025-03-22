import { Meta, StoryObj } from '@storybook/react';
import { ErrorMsg } from '../../../components';

const meta: Meta<typeof ErrorMsg> = {
  title: 'atoms/text/ErrorMsg',
  component: ErrorMsg,
  args: {
    message: 'This is an error message',
  },
  argTypes: {
    message: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ErrorMsg>;

export const Default: Story = {};
