import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WorkPage from './pages/WorkPage';
import HomePage from './pages/HomePage';
import EducationPage from './pages/EducationPage';
import ProjectsPage from './pages/ProjectsPage';
import TechnologiesPage from './pages/TechnologiesPage';

const router = createBrowserRouter([
  {
    path: '/Portfolio',
    element: <App />,
    children: [
      {
        path: '/Portfolio/',
        element: <HomePage />,
      },
      {
        path: '/Portfolio/work',
        element: <WorkPage />,
      },
      {
        path: '/Portfolio/education',
        element: <EducationPage />,
      },
      {
        path: '/Portfolio/projects',
        element: <ProjectsPage />,
      },
      {
        path: '/Portfolio/technologies',
        element: <TechnologiesPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
