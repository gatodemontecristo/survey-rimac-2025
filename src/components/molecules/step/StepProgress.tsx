import { useStepProgress } from '../../../store';
import { StepCircle, StepLine } from '../../atoms';

export const StepProgress = () => {
  const { stepProgress } = useStepProgress();
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      {stepProgress.map((step, index) => (
        <>
          {index !== 0 && (
            <StepLine
              type={step.state === 'inactive' ? 'dotted' : 'line'}
            ></StepLine>
          )}
          <StepCircle
            title={step.title}
            number={step.number}
            state={step.state}
            key={index}
          ></StepCircle>
        </>
      ))}
    </div>
  );
};
