import clsx from 'clsx';
import { FaCheck } from 'react-icons/fa6';
import { StepCircleProps } from '../../../types';

export const StepCircle = ({ title, number, state }: StepCircleProps) => {
  return (
    <div className='flex flex-col items-center justify-center gap-1'>
      <div
        className={clsx(
          'size-[80px]  flex flex-col justify-center items-center rounded-full',
          state === 'inactive' ? 'bg-rimac-white' : 'bg-rimac-black',
        )}
      >
        {state === 'completed' ? (
          <FaCheck className='w-9 h-9 text-rimac-white' />
        ) : (
          <p
            className={clsx(
              'text-4xl font-bold',
              state === 'inactive' ? 'text-rimac-red' : 'text-rimac-white',
            )}
          >
            {number}
          </p>
        )}
      </div>
      <p className='text-lg text-rimac-white'>{title}</p>
    </div>
  );
};
