import { useEffect, useState } from 'react';
import { LabelRimac, StepBigCircle } from '../../atoms';
import { useMediaQuery } from 'react-responsive';

interface StepCompletedProps {
  text: string;
  special: string;
  reverse: boolean;
  img: string;
}
export const StepCompleted = ({
  text,
  special,
  reverse,
  img,
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

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const textLabel = isMobile ? 'text-3xl' : 'text-4xl';
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
          {...{ state, img }}
        ></StepBigCircle>
      </div>
      <LabelRimac
        size={textLabel}
        text={text}
        special={special}
        reverse={reverse}
      ></LabelRimac>
    </div>
  );
};
