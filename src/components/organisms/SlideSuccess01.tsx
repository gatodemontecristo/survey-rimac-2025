import { useStepProgress } from '../../store';
import { ButtomMobile, ButtonRimac } from '../atoms';
import { StepCompleted } from '../molecules/step/StepCompleted';

export const SlideSuccess01 = () => {
  const { nextQuestion } = useStepProgress();
  return (
    <div className='flex flex-row items-center justify-center md:w-4/5 w-full gap-4 py-10 md:pr-15 pr-0 h-screen overflow-y-scroll custom-scrollbar'>
      <div className='flex flex-col items-start justify-start text-center gap-4 w-full'>
        <StepCompleted
          text='Has completado la primera parte'
          special='¡Excelente!'
          reverse={true}
          img='../icons/svgexport-118-dark.svg'
        ></StepCompleted>
        <div className='md:flex hidden  flex-row justify-end w-full mt-10 pe-10'>
          <ButtonRimac text='Siguiente' fnClick={nextQuestion}></ButtonRimac>
        </div>
        <div className='bottom-0 left-0 fixed flex md:hidden flex-row justify-center w-full'>
          <ButtomMobile text='Siguiente' fnClick={nextQuestion}></ButtomMobile>
        </div>
      </div>
    </div>
  );
};
