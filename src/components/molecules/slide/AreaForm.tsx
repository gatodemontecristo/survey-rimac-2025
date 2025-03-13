import clsx from 'clsx';
import { ReactFormProps } from '../../../types';
import { AreaRimac } from '../../atoms';
import { Controller } from 'react-hook-form';

interface AreaFormProps extends ReactFormProps {
  placeholder: string;
  maxLength: number;
  className?: string;
}
export const AreaForm = ({
  name,
  control,
  message,
  placeholder,
  maxLength,
  className,
}: AreaFormProps) => {
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
            <AreaRimac
              maxLength={maxLength}
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
