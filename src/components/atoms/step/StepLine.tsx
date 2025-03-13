import clsx from 'clsx';

interface StepLineProps {
  type: 'dotted' | 'line';
}
export const StepLine = ({ type }: StepLineProps) => {
  return (
    <div
      className={clsx(
        'w-1 h-[35px] border-l-4  border-rimac-white',
        type === 'line' ? 'border' : 'border-dotted',
      )}
    ></div>
  );
};
