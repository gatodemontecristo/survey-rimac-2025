import { Outlet } from 'react-router-dom';
import { StepHorizontal, StepProgress } from '../../components';

export const SurveyRoutes = () => {
  return (
    <div className='flex flex-col md:flex-row  overflow-hidden'>
      <div className='md:flex hidden flex-col items-center justify-center w-1/4  h-screen bg-cover bg-center bg-[url("../banner-rimac.jpeg")]'>
        <StepProgress></StepProgress>
      </div>
      <div className='md:hidden flex flex-row items-center py-4 justify-center w-full bg-cover bg-center bg-[url("../banner-rimac.jpeg")]'>
        <StepHorizontal></StepHorizontal>
      </div>
      <Outlet></Outlet>
    </div>
  );
};
