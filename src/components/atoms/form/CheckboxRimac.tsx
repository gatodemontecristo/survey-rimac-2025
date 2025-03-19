import React from 'react';
import { ItemOption } from '../../../types';
import { nanoid } from 'nanoid';
interface CheckboxRimacProps {
  options: ItemOption[];
  selectedValues: string[];
  onChange: (selectedValues: string[]) => void;
}

export const CheckboxRimac: React.FC<CheckboxRimacProps> = ({
  options,
  selectedValues,
  onChange,
}) => {
  const handleChange = (value: string) => {
    if (selectedValues.includes(value)) {
      onChange(
        selectedValues.filter((selectedValue) => selectedValue !== value),
      );
    } else {
      onChange([...selectedValues, value]);
    }
  };

  return (
    <div className='flex flex-row text-center items-center  flex-wrap  gap-x-7 gap-y-3'>
      {options.map((option) => (
        <label key={nanoid()} className='flex items-center space-x-2'>
          <input
            type='checkbox'
            checked={selectedValues.includes(option.value)}
            onChange={() => handleChange(option.value)}
            className='form-checkbox h-6 w-6 text-blue-600'
          />
          <span className='text-rimac-black'>{option.label}</span>
        </label>
      ))}
    </div>
  );
};
