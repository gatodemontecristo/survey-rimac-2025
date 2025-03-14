import { CheckboxRimac } from '../../atoms';
import { ItemOption, ReactFormProps } from '../../../types';
import { Controller } from 'react-hook-form';

interface MultiCheckboxFormProps extends ReactFormProps {
  options: ItemOption[];
}
export const MultiCheckboxForm = ({
  options,
  control,
  message,
  name,
}: MultiCheckboxFormProps) => {
  return (
    <div className='p-4'>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <CheckboxRimac
            options={options}
            selectedValues={field.value}
            onChange={field.onChange}
          />
        )}
      />
      {message && <p className='text-red-500'>{message}</p>}
    </div>
  );
};
