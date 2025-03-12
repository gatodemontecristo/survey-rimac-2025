import clsx from 'clsx';
import { ReactFormProps } from '../../../types';
import { InputRimac } from '../../atoms';
import { Controller } from 'react-hook-form';

interface InputFormProps extends ReactFormProps {
  placeholder: string;
  className?: string;
}
export const InputForm = ({
  name,
  control,
  message,
  placeholder,
  className,
}: InputFormProps) => {
  return (
    <div
      className={clsx(
        'flex flex-col items-start justify-center text-justify gap-2',
        className,
      )}
    >
      <div className={clsx('flex flex-row flex-wrap w-full')}>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <InputRimac
              placeholder={placeholder}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </div>

      {message && <p className='text-red-500'>{message}</p>}
    </div>
  );
};
