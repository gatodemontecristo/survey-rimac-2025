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
    <div className='flex flex-row items-center justify-center w-4/5 gap-4 py-10 pr-15 h-screen overflow-y-scroll custom-scrollbar'>
      <div className='flex flex-col items-start justify-start text-center   gap-4 w-full'>
        <LabelRimac
          size='text-4xl'
          text='culminaste el registro del formulario'
          special='¡Felicitaciones,'
          reverse={true}
        ></LabelRimac>
        <div className='flex flex-row justify-center w-full mt-10 pe-10'>
          <RefreshRimac fnClick={fnReset}></RefreshRimac>
        </div>
      </div>
    </div>
  );
};
