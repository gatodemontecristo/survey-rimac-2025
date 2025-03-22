import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AreaRimac } from '../../../components';
import clsx from 'clsx';

const meta: Meta<typeof AreaRimac> = {
  title: 'atoms/form/AreaRimac',
  component: AreaRimac,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
    maxLength: { control: { type: 'number', min: 1, max: 500 } },
    onChange: { action: 'changed' },
  },
};

export default meta;

type Story = StoryObj<typeof AreaRimac>;

const Template: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return (
      <div
        className={clsx(
          'flex flex-col items-start justify-center text-justify gap-2',
        )}
      >
        <div className={clsx('flex flex-row flex-wrap w-full')}>
          <AreaRimac {...args} value={value} onChange={setValue} />
        </div>
      </div>
    );
  },
};

export const Default: Story = {
  ...Template,
  args: {
    placeholder: 'Escribe aquí...',
    maxLength: 200,
    value: '',
  },
};

export const WithText: Story = {
  ...Template,
  args: {
    placeholder: 'Mensaje...',
    maxLength: 200,
    value: 'Texto predefinido',
  },
};
