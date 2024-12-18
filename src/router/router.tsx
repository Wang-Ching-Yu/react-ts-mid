import { createHashRouter } from 'react-router-dom';
import HomePage from '../view/HomePage';
import App from '../view/App';
import AddPage from '../view/AddPage';
import EditPage from '../view/EditPage';
import DeletePage from '../view/DeletePage';

export const router = createHashRouter([
  { path: '/', element: <HomePage /> },
  { path: '/app', element: <App /> },
  { path: '/add', element: <AddPage /> },
  { path: '/edit', element: <EditPage /> },
  { path: '/delete', element: <DeletePage /> },
]);
