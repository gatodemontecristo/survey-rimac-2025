import { ButtonRimac } from '../atoms';
import { StepCompleted } from '../molecules/step/StepCompleted';
interface SlideSuccess02Props {
  fnBack: () => void;
  fnSubmit: () => void;
}
export const SlideSuccess02 = ({ fnBack, fnSubmit }: SlideSuccess02Props) => {
  return (
    <div className='flex flex-row items-center justify-center w-4/5 gap-4 py-10 pr-15 h-screen overflow-y-scroll custom-scrollbar'>
      <div className='w-auto flex flex-col items-start justify-start h-full py-10'>
        <ButtonRimac isNav={true} fnClick={fnBack}></ButtonRimac>
      </div>
      <div className='flex flex-col items-start justify-start text-center gap-4 w-full'>
        <StepCompleted
          text='Ya estás a la mitad. '
          special='¡Buen trabajo!'
          number={2}
          reverse={false}
        ></StepCompleted>
        <div className='flex flex-row justify-end w-full mt-10 pe-10'>
          <ButtonRimac text='Siguiente' fnClick={fnSubmit}></ButtonRimac>
        </div>
      </div>
    </div>
  );
};
