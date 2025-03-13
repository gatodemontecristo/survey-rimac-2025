import { StepCircle, StepLine } from '../../atoms';

export const StepProgress = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <StepCircle title='Sobre ti' number={1} state='active'></StepCircle>
      <StepLine type='dotted'></StepLine>
      <StepCircle title='Hábitos' number={2} state='inactive'></StepCircle>
      <StepLine type='dotted'></StepLine>
      <StepCircle
        title='Enfermedades'
        number={3}
        state='completed'
      ></StepCircle>
      <StepLine type='dotted'></StepLine>

      <StepCircle title='Familiares' number={4} state='inactive'></StepCircle>
    </div>
  );
};
