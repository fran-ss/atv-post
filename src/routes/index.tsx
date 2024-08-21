
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home";
import Register from "../pages/register";
import Signin from "../pages/signin";


export function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Signin />,
    },
   
  ]);

  return <RouterProvider router={router} />;
}
