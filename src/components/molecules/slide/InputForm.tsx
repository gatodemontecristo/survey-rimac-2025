import clsx from 'clsx';
import { ReactFormProps } from '../../../types';
import { ErrorMsg, InputRimac } from '../../atoms';
import { Controller } from 'react-hook-form';

interface InputFormProps extends ReactFormProps {
  placeholder: string;
  type?: 'decimal' | 'number' | 'text';
  className?: string;
}
export const InputForm = ({
  name,
  control,
  message,
  className,
  type = 'decimal',
  ...props
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
              {...props}
              type={type}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </div>

      {message && <ErrorMsg message={message}></ErrorMsg>}
    </div>
  );
};
