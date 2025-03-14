import React from 'react';
import { ItemOption } from '../../../types';

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
    <div className='flex flex-row text-center flex-wrap space-y-2 gap-y-2 gap-x-4'>
      {options.map((option) => (
        <label key={option.value} className='flex items-center space-x-2'>
          <input
            type='checkbox'
            checked={selectedValues.includes(option.value)}
            onChange={() => handleChange(option.value)}
            className='form-checkbox h-5 w-5 text-blue-600'
          />
          <span className='text-rimac-black'>{option.label}</span>
        </label>
      ))}
    </div>
  );
};
