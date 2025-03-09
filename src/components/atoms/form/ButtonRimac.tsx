import '../../../styles/button-style.css';

interface ButtonRimacProps {
  text: string;
  fnClick: () => void;
}
export const ButtonRimac = ({ text, fnClick }: ButtonRimacProps) => {
  return (
    <div>
      <button onClick={fnClick} className=' button-circle'>
        <span className='button-text'>{text}</span>
      </button>
    </div>
  );
};
