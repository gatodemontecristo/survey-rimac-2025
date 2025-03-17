import { SlideProps } from '../../types';
import { ButtonRimac } from '../atoms';
import { StepCompleted } from '../molecules/step/StepCompleted';

export const SlideSuccess03 = ({ fnSubmit }: SlideProps) => {
  return (
    <div className='flex flex-row items-center justify-center w-4/5 gap-4 py-10 pr-15 h-screen overflow-y-scroll custom-scrollbar'>
      <div className='flex flex-col items-start justify-start text-center gap-4 w-full'>
        <StepCompleted
          text='Ya casi terminas, solo unos detalles más.'
          special='¡Vas por buen camino!'
          number={3}
          reverse={true}
        ></StepCompleted>
        <div className='flex flex-row justify-end w-full mt-10 pe-10'>
          <ButtonRimac text='Siguiente' fnClick={fnSubmit}></ButtonRimac>
        </div>
      </div>
    </div>
  );
};
