import clsx from 'clsx';

interface LabelRimacProps {
  size?:
    | 'text-base'
    | 'text-lg'
    | 'text-xl'
    | 'text-2xl'
    | 'text-3xl'
    | 'text-4xl'
    | 'text-5xl'
    | 'text-6xl'
    | 'text-7xl'
    | 'text-8xl'
    | 'text-9xl';
  text: string;
  special?: string;
}
export const LabelRimac = ({
  size = 'text-2xl',
  text,
  special,
}: LabelRimacProps) => {
  return (
    <p className={clsx(' font-bold mb-4', size)}>
      {text}{' '}
      {special && (
        <span className='bg-gradient-to-r from-[#ff6200] via-[#f7052d] to-[#b00968] bg-clip-text text-transparent'>
          {special}
        </span>
      )}
    </p>
  );
};
