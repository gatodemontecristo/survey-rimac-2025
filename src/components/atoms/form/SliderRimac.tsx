interface SliderRimacProps {
  min: number;
  max: number;
  step: number;
  value: number;
  leftTitle?: string;
  rightTitle?: string;
  onChange: (value: number) => void;
}

export const SliderRimac: React.FC<SliderRimacProps> = ({
  min,
  max,
  step,
  value,
  onChange,
  leftTitle,
  rightTitle,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };
  return (
    <div className='w-full'>
      <input
        type='range'
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb'
      />
      <div className='flex justify-between mt-2 text-base text-rimac-grey'>
        <span>{leftTitle ? leftTitle : min}</span>
        <span>{value}</span>
        <span>{rightTitle ? rightTitle : max}</span>
      </div>
    </div>
  );
};
