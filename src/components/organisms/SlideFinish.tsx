import { useFormData, useStepProgress } from '../../store';
import { LabelRimac, RefreshRimac } from '../atoms';

export const SlideFinish = () => {
  const { resetForm } = useFormData();
  const { resetStepProgress } = useStepProgress();
  const fnReset = () => {
    resetForm();
    resetStepProgress();
  };
  return (
    <div className='flex flex-row items-center justify-center w-4/5 gap-4 md:py-10 py-20 md:pr-15 pr-0 h-screen overflow-y-scroll custom-scrollbar'>
      <div className='flex flex-col items-start md:justify-start justify-center text-center   gap-4 w-full'>
        <LabelRimac
          size='text-4xl'
          text='culminaste el registro del formulario'
          special='¡Felicitaciones,'
          reverse={true}
        ></LabelRimac>
        <div className='flex flex-row justify-center w-full mt-10 md:pe-10 pe-0'>
          <RefreshRimac fnClick={fnReset}></RefreshRimac>
        </div>
      </div>
    </div>
  );
};
