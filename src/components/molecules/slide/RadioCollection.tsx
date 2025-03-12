import { ItemOption, ReactFormProps } from '../../../types';
import { RadioRimac } from '../../atoms';
import { Controller } from 'react-hook-form';

interface RadioCollectionProps extends ReactFormProps {
  itemOptions: ItemOption[];
}
export const RadioCollection = ({
  itemOptions,
  name,
  control,
  message,
}: RadioCollectionProps) => {
  return (
    <>
      <div className='flex flex-row flex-wrap gap-7'>
        {itemOptions.map((itemOption) => (
          <Controller
            key={itemOption.value}
            name={name}
            control={control}
            render={({ field }) => (
              <RadioRimac
                {...field}
                value={itemOption.value}
                label={itemOption.label}
                checked={field.value === itemOption.value}
                onChange={() => field.onChange(itemOption.value)}
              />
            )}
          />
        ))}
      </div>
      {message && <p className='text-red-500'>{message}</p>}
    </>
  );
};
