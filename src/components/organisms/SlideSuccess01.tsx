import { useStepProgress } from '../../store';
import { ButtonRimac } from '../atoms';
import { StepCompleted } from '../molecules/step/StepCompleted';

export const SlideSuccess01 = () => {
  const { nextQuestion } = useStepProgress();
  return (
    <div className='flex flex-row items-center justify-center w-4/5 gap-4 py-10 pr-15 h-screen overflow-y-scroll custom-scrollbar'>
      <div className='flex flex-col items-start justify-start text-center gap-4 w-full'>
        <StepCompleted
          text='Has completado la primera parte'
          special='¡Excelente!'
          reverse={true}
          img='../icons/svgexport-118-dark.svg'
        ></StepCompleted>
        <div className='flex flex-row justify-end w-full mt-10 pe-10'>
          <ButtonRimac text='Siguiente' fnClick={nextQuestion}></ButtonRimac>
        </div>
      </div>
    </div>
  );
};
