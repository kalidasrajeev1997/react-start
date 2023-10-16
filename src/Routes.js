import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Effect from "./Effect";
import ErrorPage from "./ErrorPage";
import Forms from "./Forms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate replace to="/effect" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/effect/:username",
    element: <Effect />,
  },
  {
    path: "/login",
    element: <Forms />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
