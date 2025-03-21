import { useState } from 'react';

interface AreaRimacProps {
  maxLength: number;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export const AreaRimac = ({
  maxLength,
  placeholder,
  value,
  onChange,
}: AreaRimacProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    if (value === '') {
      setIsFocused(false);
    }
  };
  return (
    <div className='relative w-full'>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={maxLength}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className='w-full font-br-sonoma px-4 pt-5 pb-3 md:text-xl text-lg border border-gray-300 rounded focus:outline-none focus:border-blue-500 resize-none'
        rows={4}
      />
      <label
        className={`absolute left-4  font-br-sonoma   transition-all duration-300 ease-in-out ${
          isFocused || value
            ? 'text-base top-1 text-blue-500'
            : 'text-gray-500 -translate-y-1/2 top-5 md:text-xl text-base'
        }`}
      >
        {placeholder}
      </label>
      <div className='absolute bottom-2 right-2 text-gray-500 text-sm'>
        {value.length}/{maxLength}
      </div>
    </div>
  );
};
