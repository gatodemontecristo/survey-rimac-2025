import React, { useState } from 'react';
import Select from 'react-select';

export interface Option {
  value: string;
  label: string;
}

interface InputSelectProps {
  options: Option[];
  placeholder?: string;
  value: Option | null;
  onChange: (selectedOption: Option | null) => void;
}

export const InputSelect: React.FC<InputSelectProps> = ({
  options,
  placeholder,
  value,
  onChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    if (value?.value === '') {
      setIsFocused(false);
    }
  };
  return (
    <div className='relative w-full'>
      <Select
        options={options}
        value={value}
        onChange={onChange}
        placeholder=''
        onFocus={handleFocus}
        onBlur={handleBlur}
        className='w-full  rounded focus:outline-none focus:border-blue-500 border-none'
        classNamePrefix='react-select'
      />
      <label
        className={`absolute left-4     transition-all duration-300 ease-in-out ${
          isFocused || value
            ? 'text-xs top-1 text-blue-500'
            : 'text-gray-500 -translate-y-1/2 top-1/2'
        }`}
      >
        {placeholder}
      </label>
    </div>
  );
};
