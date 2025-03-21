import clsx from 'clsx';
import { ItemOption, ReactFormProps, TailwindJustify } from '../../../types';
import { ErrorMsg, RadioRimac } from '../../atoms';
import { Controller } from 'react-hook-form';
import { nanoid } from 'nanoid';

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
            key={nanoid()}
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
      {message && <ErrorMsg message={message}></ErrorMsg>}
    </>
  );
};
