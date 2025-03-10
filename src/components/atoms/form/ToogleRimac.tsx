import clsx from 'clsx';
import { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

interface ToogleRimacProps {
  text?: string;
  onState?: boolean;
  className?: string;
}
export const ToogleRimac = ({
  text,
  onState = false,
  className,
}: ToogleRimacProps) => {
  const [isOn, setIsOn] = useState(onState);
  return (
    <div
      className={clsx(
        'flex flex-row items-center justify-center gap-4',
        className,
      )}
    >
      <button
        onClick={() => setIsOn(!isOn)}
        className={clsx(
          'relative flex items-center w-20 h-10 bg-gray-300  rounded-full p-1 transition-all duration-300',
          isOn ? 'bg-rimac-red' : 'bg-gray-300 dark:bg-rimac-grey',
        )}
      >
        <span
          className={clsx(
            'absolute left-3 text-sm font-medium transition-opacity duration-300',
            isOn ? 'opacity-100' : 'opacity-0',
          )}
        ></span>
        <span
          className={clsx(
            'absolute right-3 text-sm font-medium transition-opacity duration-300',
            isOn ? 'opacity-0' : 'opacity-100',
          )}
        ></span>
        <div
          className={clsx(
            'absolute flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md transition-transform duration-300',
            isOn ? 'translate-x-10' : 'translate-x-0',
          )}
        >
          {isOn ? (
            <FaCheck className='w-5 h-5 text-rimac-black' />
          ) : (
            <FaTimes className='w-5 h-5 text-rimac-black' />
          )}
        </div>
      </button>
      {text && <p className='text-rimac-grey font-br-sonoma text-xl'>{text}</p>}
    </div>
  );
};
