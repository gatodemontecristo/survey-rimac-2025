import { Outlet } from 'react-router-dom';
import { StepProgress } from '../../components';

export const SurveyRoutes = () => {
  return (
    <div className='flex flex-row   overflow-hidden'>
      <div className='flex flex-col items-center justify-center w-1/4  h-screen bg-cover bg-center bg-[url("../banner-rimac.jpeg")]'>
        <StepProgress></StepProgress>
      </div>

      {/* <ButtonRimac text='Botón rimac' fnClick={() => {}}></ButtonRimac>
      <InputRimac></InputRimac> */}
      <Outlet></Outlet>
    </div>
  );
};
