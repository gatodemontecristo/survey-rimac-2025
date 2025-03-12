import { useState } from 'react';

interface InputRimacProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}
export const InputRimac = ({
  placeholder,
  value,
  onChange,
}: InputRimacProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    if (value === '') {
      setIsFocused(false);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (/^\d*\.?\d*$/.test(newValue)) {
      onChange(newValue);
    }
  };

  return (
    <div className='relative w-full'>
      <input
        type='text'
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className='w-full px-4 py-4 font-br-sonoma border border-gray-300 rounded focus:outline-none focus:border-blue-500'
      />
      <label
        className={`absolute left-4  font-br-sonoma   transition-all duration-300 ease-in-out ${
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
