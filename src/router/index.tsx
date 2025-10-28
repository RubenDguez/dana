import { createBrowserRouter } from 'react-router-dom';
import { Main } from '../layouts';
import { Home, NotFound } from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default router;
