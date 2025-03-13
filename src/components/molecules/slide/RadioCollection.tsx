import clsx from 'clsx';
import { ItemOption, ReactFormProps, TailwindJustify } from '../../../types';
import { RadioRimac } from '../../atoms';
import { Controller } from 'react-hook-form';

interface RadioCollectionProps extends ReactFormProps {
  itemOptions: ItemOption[];
  justifyOption?: TailwindJustify;
}
export const RadioCollection = ({
  itemOptions,
  justifyOption = 'justify-start',
  name,
  control,
  message,
}: RadioCollectionProps) => {
  return (
    <>
      <div
        className={clsx(
          'flex flex-row flex-wrap ms-5 gap-x-7 gap-y-2',
          justifyOption,
        )}
      >
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
