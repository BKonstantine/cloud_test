import { createBrowserRouter } from "react-router-dom";
import App from "../components/app/app";
import MainPage from "../pages/main-page/main-page";
import TabPage from "../pages/tab-page/tab-page";

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
        element: <TabPage />,
      },
    ],
  },
]);
