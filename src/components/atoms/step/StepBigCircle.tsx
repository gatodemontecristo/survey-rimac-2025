import clsx from 'clsx';
import { FaCheck } from 'react-icons/fa6';
import { StepCircleProps } from '../../../types';

interface StepCircleSpecialProps extends StepCircleProps {
  className?: string;
}
export const StepBigCircle = ({
  title,
  state,
  className,
  img,
}: StepCircleSpecialProps) => {
  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center gap-1',
        className,
      )}
    >
      <div
        className={clsx(
          'size-[150px] flex flex-col justify-center items-center rounded-full transition-all duration-500',
          state === 'inactive' ? 'bg-rimac-white' : 'bg-rimac-black',
          state === 'completed' && 'fade-in',
        )}
      >
        {state === 'completed' ? (
          <FaCheck className='w-12 h-12 text-rimac-white animate-check' />
        ) : (
          <img src={img} alt='logo' className='size-20'></img>
        )}
      </div>
      {title.length > 0 && <p className='text-lg text-rimac-white'>{title}</p>}
    </div>
  );
};
