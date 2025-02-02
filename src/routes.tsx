import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import RootLayout from './layouts/RootLayout';
import Payments from './pages/Payments';
import Subscriptions from './pages/Subscriptions';
import Analyzes from './pages/Analyzes';

const routes = [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { path: '', element: <Home /> },
        { path: 'payments', element: <Payments /> },
        { path: 'subscriptions', element: <Subscriptions /> },
        { path: 'analyzes', element: <Analyzes /> },
  
      ],
    },
  ];


  const router = createBrowserRouter(routes);

  export default router;