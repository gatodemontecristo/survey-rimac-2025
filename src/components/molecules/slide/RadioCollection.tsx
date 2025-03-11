import { ItemOption } from '../../../types';
import { RadioRimac } from '../../atoms';
import { Control, Controller } from 'react-hook-form';

interface RadioCollectionProps {
  itemOptions: ItemOption[];
  control: Control<any>;
  message?: string;
}
export const RadioCollection = ({
  itemOptions,
  control,
  message,
}: RadioCollectionProps) => {
  return (
    <>
      <div className='flex flex-row flex-wrap gap-5'>
        {itemOptions.map((itemOption) => (
          <Controller
            key={itemOption.value}
            name='haveInsurance'
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
