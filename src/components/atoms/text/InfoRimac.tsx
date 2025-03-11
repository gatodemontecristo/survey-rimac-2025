import clsx from 'clsx';
import { InfoRimacProps } from '../../../types';

export const InfoRimac = ({ text, className }: InfoRimacProps) => {
  return (
    <p
      className={clsx(
        'text-rimac-grey font-br-sonoma text-xl leading-8',
        className,
      )}
    >
      {text}
    </p>
  );
};
