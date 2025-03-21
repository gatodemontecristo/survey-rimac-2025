import { ReactFormProps } from '../../../types';
import { ErrorMsg, ToogleRimac } from '../../atoms';
import { Controller } from 'react-hook-form';

interface ToogleCollectionProps extends ReactFormProps {
  text: string;
  className: string;
}
export const ToogleCollection = ({
  name,
  control,
  message,
  text,
  className,
}: ToogleCollectionProps) => {
  return (
    <>
      <div className='flex flex-row flex-wrap'>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <ToogleRimac
              text={text}
              className={className}
              isOn={field.value ?? false}
              setIsOn={field.onChange}
            ></ToogleRimac>
          )}
        />
      </div>
      {message && <ErrorMsg message={message}></ErrorMsg>}
    </>
  );
};
