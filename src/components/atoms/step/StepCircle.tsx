import clsx from 'clsx';
import { FaCheck } from 'react-icons/fa6';
import { StepCircleProps } from '../../../types';

interface StepCircleSpecialProps extends StepCircleProps {
  className?: string;
}
export const StepCircle = ({
  title,
  state,
  className,
  img,
}: StepCircleSpecialProps) => {
  const formatImg = () => {
    const imgFormat = img.split('.')[2];
    return state === 'inactive' ? imgFormat + '.svg' : imgFormat + '-dark.svg';
  };
  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center gap-1',
        className,
      )}
    >
      <div
        className={clsx(
          'size-[80px] flex flex-col justify-center items-center rounded-full transition-all duration-500',
          state === 'inactive' ? 'bg-rimac-white' : 'bg-rimac-black',
          state === 'completed' && 'fade-in',
        )}
      >
        {state === 'completed' ? (
          <FaCheck className='w-9 h-9 text-rimac-white animate-check' />
        ) : (
          <img src={formatImg()} alt='logo' className='size-12'></img>
        )}
      </div>
      {title.length > 0 && <p className='text-lg text-rimac-white'>{title}</p>}
    </div>
  );
};
