import { Outlet } from 'react-router-dom';
import { ButtonRimac, InputRimac } from '../../components';

export const SurveyRoutes = () => {
  return (
    <div>
      <ButtonRimac text='Botón rimac' fnClick={() => {}}></ButtonRimac>
      <InputRimac></InputRimac>
      <Outlet></Outlet>
    </div>
  );
};
