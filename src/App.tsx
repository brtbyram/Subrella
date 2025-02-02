import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import RootLayout from './layouts/RootLayout';
import Payments from './pages/Payments';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'payments', element: <Payments /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;