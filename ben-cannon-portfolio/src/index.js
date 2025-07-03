import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WorkPage from "./pages/WorkPage";
import HomePage from "./pages/HomePage";
import UniPage from "./pages/UniPage";
import ProjectsPage from "./pages/ProjectsPage";

const router = createBrowserRouter([
  {
    path: "/Portfolio",
    element: <App />,
    children: [
      {
        path: "/Portfolio/",
        element: <HomePage />,
      },
      {
        path: "/Portfolio/work",
        element: <WorkPage />,
      },
      {
        path: "/Portfolio/uni",
        element: <UniPage />,
      },
      {
        path: "/Portfolio/projects",
        element: <ProjectsPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
