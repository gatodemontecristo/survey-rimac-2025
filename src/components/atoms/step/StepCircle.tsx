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
        'flex flex-col items-center justify-center gap-1 w-[20%] md:w-auto ',
        className,
      )}
    >
      <div
        className={clsx(
          'size-[50px] md:size-[80px] flex flex-col justify-center items-center rounded-full transition-all duration-500',
          state === 'inactive' ? 'bg-rimac-white' : 'bg-rimac-black',
          state === 'completed' && 'fade-in',
        )}
      >
        {state === 'completed' ? (
          <FaCheck className='md:w-9 w-6 md:h-9 h-6 text-rimac-white animate-check' />
        ) : (
          <img src={formatImg()} alt='logo' className='size-8 md:size-12'></img>
        )}
      </div>
      {title.length > 0 && (
        <p className='text-xs md:text-lg text-rimac-white'>{title}</p>
      )}
    </div>
  );
};
