import clsx from 'clsx';
import '../../../styles/button-style.css';
import { FaArrowRotateLeft } from 'react-icons/fa6';

interface RefreshRimacProps {
  fnClick: () => void;
  className?: string;
}
export const RefreshRimac = ({ fnClick, className }: RefreshRimacProps) => {
  return (
    <button onClick={fnClick} className={clsx('button-circle', className)}>
      <FaArrowRotateLeft className='size-8 button-text' />
    </button>
  );
};
