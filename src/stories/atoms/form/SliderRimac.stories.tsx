import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SliderRimac } from '../../../components';

const meta: Meta<typeof SliderRimac> = {
  title: 'atoms/form/SliderRimac',
  component: SliderRimac,
  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    value: { control: 'number' },
    leftTitle: { control: 'text' },
    rightTitle: { control: 'text' },
    onChange: { action: 'changed' },
  },
};

export default meta;

type Story = StoryObj<typeof SliderRimac>;

const Template: Story = {
  render: (args) => {
    const [sliderValue, setSliderValue] = useState(args.value);
    return (
      <SliderRimac {...args} value={sliderValue} onChange={setSliderValue} />
    );
  },
};

export const Default: Story = {
  ...Template,
  args: {
    min: 0,
    max: 100,
    step: 1,
    value: 50,
    leftTitle: 'Min',
    rightTitle: 'Max',
  },
};
