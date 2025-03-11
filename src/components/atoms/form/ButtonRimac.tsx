import clsx from 'clsx';
import '../../../styles/button-style.css';

interface ButtonRimacProps {
  text: string;
  fnClick: () => void;
  className?: string;
}
export const ButtonRimac = ({ text, fnClick, className }: ButtonRimacProps) => {
  return (
    <button onClick={fnClick} className={clsx('button-circle', className)}>
      <span className='button-text'>{text}</span>
    </button>
  );
};
