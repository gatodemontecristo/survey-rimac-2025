import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ToogleRimac } from '../../../components';

const meta: Meta<typeof ToogleRimac> = {
  title: 'atoms/form/ToogleRimac',
  component: ToogleRimac,
  argTypes: {
    text: { control: 'text' },
    className: { control: 'text' },
    isOn: { control: 'boolean' },
    setIsOn: { action: 'toggled' },
  },
};

export default meta;

type Story = StoryObj<typeof ToogleRimac>;

const Template: Story = {
  render: (args) => {
    const [toggleState, setToggleState] = useState(args.isOn);
    return (
      <ToogleRimac {...args} isOn={toggleState} setIsOn={setToggleState} />
    );
  },
};

export const Default: Story = {
  ...Template,
  args: {
    text: 'Toggle Switch',
    isOn: false,
  },
};
