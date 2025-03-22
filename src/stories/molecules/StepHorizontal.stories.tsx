import { Meta, StoryObj } from '@storybook/react';
import { useStepProgress } from '../../store';
import { StepHorizontal } from '../../components';

const meta: Meta<typeof StepHorizontal> = {
  title: 'molecules/StepHorizontal',
  component: StepHorizontal,
  decorators: [
    (Story) => {
      useStepProgress.setState({
        stepProgress: [
          {
            title: 'Step 1',
            state: 'completed',
            img: '../icons/svgexport-118.svg',
          },
          { title: 'Step 2', state: 'active', img: '../icons/svgexport-8.svg' },
          {
            title: 'Step 3',
            state: 'inactive',
            img: '../icons/svgexport-2.svg',
          },
        ],
      });

      return <Story />;
    },
  ],
};

export default meta;
type Story = StoryObj<typeof StepHorizontal>;

export const Default: Story = {
  parameters: {
    backgrounds: {
      default: 'red-rimac',
      values: [{ name: 'red-rimac', value: '#f7052d' }],
    },
  },
};
