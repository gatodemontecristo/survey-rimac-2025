import { ButtonRimac } from '../atoms';
import { StepCompleted } from '../molecules/step/StepCompleted';
interface SlideSuccess01Props {
  fnSubmit: () => void;
}
export const SlideSuccess01 = ({ fnSubmit }: SlideSuccess01Props) => {
  return (
    <div className='flex flex-row items-center justify-center w-4/5 gap-4 py-10 pr-15 h-screen overflow-y-scroll custom-scrollbar'>
      <div className='flex flex-col items-start justify-start text-center gap-4 w-full'>
        <StepCompleted
          text='Has completado la primera parte'
          special='¡Excelente!'
          number={1}
          reverse={true}
        ></StepCompleted>
        <div className='flex flex-row justify-end w-full mt-10 pe-10'>
          <ButtonRimac text='Siguiente' fnClick={fnSubmit}></ButtonRimac>
        </div>
      </div>
    </div>
  );
};
