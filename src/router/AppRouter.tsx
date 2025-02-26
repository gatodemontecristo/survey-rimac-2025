import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { SurveyChildRoutes, SurveyRoutes } from './routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SurveyRoutes />,
    children: SurveyChildRoutes,
  },
]);

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
