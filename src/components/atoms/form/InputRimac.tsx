import { useState } from 'react';

interface InputRimacProps {
  placeholder?: string;
  value: string;
  type: 'decimal' | 'number';
  onChange: (value: string) => void;
}
export const InputRimac = ({
  placeholder,
  value,
  type,
  onChange,
}: InputRimacProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    if (value === '') {
      setIsFocused(false);
    }
  };
  const handleChangeDecimal = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (/^\d*\.?\d*$/.test(newValue)) {
      onChange(newValue);
    }
  };

  const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (
      /^\d*$/.test(newValue) &&
      (newValue === '' || Number(newValue) <= 9999)
    ) {
      onChange(newValue);
    }
  };

  return (
    <div className='relative w-full'>
      <input
        type='text'
        value={value}
        onChange={type === 'number' ? handleChangeNumber : handleChangeDecimal}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className='w-full px-4 pt-5 pb-3 md:text-xl text-lg   font-br-sonoma border border-gray-300 rounded focus:outline-none focus:border-blue-500'
      />
      <label
        className={`absolute left-4  font-br-sonoma  transition-all duration-300 ease-in-out ${
          isFocused || value
            ? 'text-base top-1 text-blue-500'
            : 'text-gray-500 -translate-y-1/2 top-1/2 md:text-xl text-base'
        }`}
        style={{
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        {placeholder}
      </label>
    </div>
  );
};
