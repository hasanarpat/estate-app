import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './routes/home/HomePage';
import { Layout } from './routes/layout/Layout';
import { RequireAuth } from './routes/layout/Layout';
import ListPage from './routes/list/ListPage';
import SinglePage from './routes/singlePage/SinglePage';
import ProfilePage from './routes/profile/ProfilePage';
import Register from './routes/register/register';
import Login from './routes/login/Login';
import ProfileUpdatePage from './routes/profileUpdate/profileUpdatePage';
import NewPost from './routes/newPost/NewPost';

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

        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/register',
          element: <Register />,
        },
      ],
    },
    {
      path: '/',
      element: <RequireAuth />,
      children: [
        {
          path: '/profile',
          element: <ProfilePage />,
        },
        {
          path: '/profile/update',
          element: <ProfileUpdatePage />,
        },
        {
          path: '/add',
          element: <NewPost />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
