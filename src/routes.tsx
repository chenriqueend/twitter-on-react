import { createBrowserRouter } from "react-router-dom";
import { TimeLine } from "./pages/TimeLine/TimeLine";
import { Status } from "./pages/Status/Status";
import { Default } from "./layout/Default";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: "/",
        element: <TimeLine />,
      },
      {
        path: "/status",
        element: <Status />,
      },
    ],
  },
]);
