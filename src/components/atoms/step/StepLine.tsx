import clsx from 'clsx';

interface StepLineProps {
  type: 'dotted' | 'line';
}
export const StepLine = ({ type }: StepLineProps) => {
  return (
    <div
      className={clsx(
        'w-4 md:w-1 h-[25px] md:h-[35px] border-t-4 md:border-l-4  border-rimac-white',
        type === 'line' ? 'border' : 'border-dotted',
      )}
    ></div>
  );
};
