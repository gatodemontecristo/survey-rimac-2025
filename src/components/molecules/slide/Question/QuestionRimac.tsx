import clsx from 'clsx';
import { QuestionRimacProps } from '../../../../types';

export const QuestionRimac = ({ children, className }: QuestionRimacProps) => {
  return (
    <div className={clsx('flex flex-col gap-4', className)}>{children}</div>
  );
};
