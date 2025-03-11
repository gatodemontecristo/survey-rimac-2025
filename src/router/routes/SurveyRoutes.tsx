import { Outlet } from 'react-router-dom';
import { ButtonRimac, InputRimac } from '../../components';

export const SurveyRoutes = () => {
  return (
    <div className='flex flex-row   overflow-hidden'>
      <div className='flex flex-col w-1/4 bg-rimac-red h-screen'></div>

      {/* <ButtonRimac text='Botón rimac' fnClick={() => {}}></ButtonRimac>
      <InputRimac></InputRimac> */}
      <Outlet></Outlet>
    </div>
  );
};
