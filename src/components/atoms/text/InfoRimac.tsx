import clsx from 'clsx';
import { InfoRimacProps } from '../../../types';

export const InfoRimac = ({
  text,
  className,
  size = 'text-xl',
}: InfoRimacProps) => {
  const createMarkup = (html: string) => {
    return { __html: html.replace(/\n/g, '<br>') };
  };
  return (
    <p
      className={clsx(
        'text-rimac-grey font-br-sonoma md:leading-8 leading-6',
        className,
        size,
      )}
      dangerouslySetInnerHTML={createMarkup(text)}
    ></p>
  );
};
