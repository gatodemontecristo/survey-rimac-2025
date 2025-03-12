import { ItemOption, ReactFormProps } from '../../../types';
import { Controller } from 'react-hook-form';
import { InputSelect } from '../../atoms';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

interface SelectRimacProps extends ReactFormProps {
  itemOptions: ItemOption[];
}
export const SelectRimac = ({
  name,
  control,
  message,
  itemOptions,
}: SelectRimacProps) => {
  return (
    <>
      <div className='flex flex-row flex-wrap w-2/3'>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <InputSelect
              options={options}
              placeholder='Select an option'
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </div>

      {message && <p className='text-red-500'>{message}</p>}
    </>
  );
};
