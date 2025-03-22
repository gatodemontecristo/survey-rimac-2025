import { Meta, StoryObj } from '@storybook/react';
import { UrlRimac } from '../../../components';

const meta: Meta<typeof UrlRimac> = {
  title: 'atoms/text/UrlRimac',
  component: UrlRimac,
  args: {
    text: 'Click here',
    url: 'https://www.rimac.com/',
    size: 'text-base',
  },
  argTypes: {
    text: { control: 'text' },
    url: { control: 'text' },
    size: {
      control: 'select',
      options: ['text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof UrlRimac>;

export const Default: Story = {};
