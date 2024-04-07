import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './routes/home/HomePage';
import Layout from './routes/layout/Layout';
import ListPage from './routes/list/ListPage';
import SinglePage from './routes/singlePage/SinglePage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/list',
          element: <ListPage />,
        },
        {
          path: '/:id',
          element: <SinglePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;