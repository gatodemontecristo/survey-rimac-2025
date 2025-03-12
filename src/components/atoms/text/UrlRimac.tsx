import clsx from 'clsx';
import { UrlRimacProps } from '../../../types';

export const UrlRimac = ({
  text,
  url = '#',
  className,
  size = 'text-base',
}: UrlRimacProps) => {
  return (
    <a
      className={clsx(
        'font-br-sonoma underline text-rimac-purple font-medium underline-offset-3',
        size,
        className,
      )}
      href={url}
    >
      {text}
    </a>
  );
};
