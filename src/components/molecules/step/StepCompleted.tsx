import { useEffect, useState } from 'react';
import { LabelRimac, StepBigCircle } from '../../atoms';

interface StepCompletedProps {
  text: string;
  special: string;
  number: number;
  reverse: boolean;
}
export const StepCompleted = ({
  text,
  special,
  number,
  reverse,
}: StepCompletedProps) => {
  const [state, setState] = useState<'active' | 'completed' | 'inactive'>(
    'active',
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setState('completed');
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className='flex flex-col items-center justify-center gap-7 text-center'>
      <div className='relative flex items-center justify-center w-[210px] h-[210px]'>
        <svg className='absolute inset-0 w-full h-full'>
          <circle
            cx='50%'
            cy='50%'
            r='100'
            stroke='#f7052d'
            strokeWidth='10'
            fill='none'
            className='animate-draw-circle'
          />
        </svg>
        <StepBigCircle
          className='z-10 absolute'
          title={''}
          number={number}
          state={state}
        ></StepBigCircle>
      </div>
      <LabelRimac
        size='text-4xl'
        text={text}
        special={special}
        reverse={reverse}
      ></LabelRimac>
    </div>
  );
};
