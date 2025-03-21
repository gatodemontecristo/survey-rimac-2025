import clsx from 'clsx';
import '../../../styles/button-style.css';
import { FaAngleLeft } from 'react-icons/fa6';

interface ButtonRimacProps {
  text?: string;
  fnClick: () => void;
  className?: string;
  isNav?: boolean;
}
export const ButtomMobile = ({
  text = '',
  fnClick,
  className,
  isNav = false,
}: ButtonRimacProps) => {
  return (
    <button
      onClick={fnClick}
      className={clsx(
        'w-full',
        isNav ? 'button-reverse-mb' : 'button-circle-mb',
        className,
      )}
    >
      {isNav ? (
        <FaAngleLeft className='size-5 button-text' />
      ) : (
        <span className='button-text'>{text}</span>
      )}
    </button>
  );
};
