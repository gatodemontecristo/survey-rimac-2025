import { Fragment } from 'react/jsx-runtime';
import { useStepProgress } from '../../../store';
import { StepCircle, StepLine } from '../../atoms';

export const StepHorizontal = () => {
  const { stepProgress } = useStepProgress();
  return (
    <div className='flex flex-row items-center justify-center md:gap-2 gap-0 w-full'>
      {stepProgress.map((step, index) => (
        <Fragment key={index}>
          {index !== 0 && (
            <StepLine
              type={step.state === 'inactive' ? 'dotted' : 'line'}
            ></StepLine>
          )}
          <StepCircle
            title={step.title}
            state={step.state}
            img={step.img}
            key={index}
          ></StepCircle>
        </Fragment>
      ))}
    </div>
  );
};
