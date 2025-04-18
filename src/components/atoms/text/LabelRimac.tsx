import clsx from 'clsx';
import { LabelRimacProps } from '../../../types';

export const LabelRimac = ({
  size = 'text-2xl',
  text,
  special,
  reverse = false,
}: LabelRimacProps) => {
  return reverse ? (
    <p className={clsx(' font-bold', size)}>
      {special && (
        <span className='bg-gradient-to-r from-[#ff6200] via-[#f7052d] to-[#b00968] bg-clip-text text-transparent'>
          {special}
        </span>
      )}{' '}
      {text}
    </p>
  ) : (
    <p className={clsx(' font-bold', size)}>
      {text}{' '}
      {special && (
        <span className='bg-gradient-to-r from-[#ff6200] via-[#f7052d] to-[#b00968] bg-clip-text text-transparent'>
          {special}
        </span>
      )}
    </p>
  );
};
