import { useRoutes } from 'react-router-dom';

// project import
import MainRoutes from './MainRoutes';
import NotFound from 'components/NotFound';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([MainRoutes, { path: '*', element: <NotFound /> }]);
}
