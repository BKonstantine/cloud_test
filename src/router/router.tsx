import { createBrowserRouter } from "react-router-dom";
import App from "../components/app/app";
import MainPage from "../pages/main-page/main-page";
import FormPage from "../pages/form-page/form-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/create",
        element: <FormPage />,
      },
    ],
  },
]);
