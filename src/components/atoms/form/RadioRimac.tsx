interface RadioRimacProps {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (value: string) => void;
}
import '../../../styles/radio-style.css';

export const RadioRimac = ({
  name,
  value,
  label,
  checked,
  onChange,
}: RadioRimacProps) => {
  return (
    <label className='flex items-center cursor-pointer'>
      <input
        type='radio'
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
      />
      <div className='custom-radio'></div>
      <span className='radio-label font-br-sonoma text-lg'>{label}</span>
    </label>
  );
};
