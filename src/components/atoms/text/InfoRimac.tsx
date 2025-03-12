import clsx from 'clsx';
import { InfoRimacProps } from '../../../types';

export const InfoRimac = ({
  text,
  className,
  size = 'text-xl',
}: InfoRimacProps) => {
  return (
    <p
      className={clsx(
        'text-rimac-grey font-br-sonoma leading-8',
        className,
        size,
      )}
    >
      {text}
    </p>
  );
};
