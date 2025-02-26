import { Navigate } from 'react-router-dom';
import { SurveyMain } from '../../pages';

export const SurveyChildRoutes = [
  { path: 'encuesta', element: <SurveyMain /> },
  { path: '/*', element: <Navigate to='/encuesta' /> },
  { path: '/', element: <Navigate to='/encuesta' /> },
];
