import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App';
import ProductDetail from './components/ProductDetail';
import Home from './components/Home';

const root = createRoot(document.querySelector('#root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/:product',
        element: <ProductDetail />,
      },
    ],
  },
]);
root.render(<RouterProvider router={router} />);
