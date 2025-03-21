import { ItemOption, ReactFormProps } from '../../../types';
import { Controller } from 'react-hook-form';
import { ErrorMsg, InputSelect } from '../../atoms';

interface SelectRimacProps extends ReactFormProps {
  itemOptions: ItemOption[];
  placeholder: string;
}
export const SelectRimac = ({
  name,
  control,
  message,
  itemOptions,
  placeholder,
}: SelectRimacProps) => {
  return (
    <>
      <div className='flex flex-row flex-wrap md:w-2/3 w-full'>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <InputSelect
              options={itemOptions}
              placeholder={placeholder}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </div>

      {message && <ErrorMsg message={message}></ErrorMsg>}
    </>
  );
};
