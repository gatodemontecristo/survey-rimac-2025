interface RadioRimacProps {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (value: string) => void;
}
import React from 'react';
import '../../../styles/radio-style.css';

export const RadioRimac = React.forwardRef<HTMLInputElement, RadioRimacProps>(
  ({ value, label, checked, onChange }, ref) => {
    return (
      <label className='flex items-center cursor-pointer'>
        <input
          type='radio'
          ref={ref}
          value={value}
          checked={checked}
          onChange={() => onChange(value)}
        />
        <div className='custom-radio'></div>
        <span className='radio-label font-br-sonoma text-lg'>{label}</span>
      </label>
    );
  },
);
