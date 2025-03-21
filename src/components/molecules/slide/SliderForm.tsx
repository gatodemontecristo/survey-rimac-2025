import clsx from 'clsx';
import { Controller } from 'react-hook-form';
import { ErrorMsg, InfoRimac, SliderRimac } from '../../atoms';
import { ReactFormProps } from '../../../types';

interface SliderFormProps extends ReactFormProps {
  className?: string;
  min: number;
  max: number;
  step: number;
  leftTitle?: string;
  rightTitle?: string;
  mainTitle?: string;
}
export const SliderForm = ({
  name,
  control,
  message,
  className,
  mainTitle,
  ...props
}: SliderFormProps) => {
  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center text-center gap-3 my-2',
      )}
    >
      {mainTitle && <InfoRimac size='text-lg' text={mainTitle}></InfoRimac>}
      <div className={clsx('flex flex-row flex-wrap', className)}>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <SliderRimac
              {...props}
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
