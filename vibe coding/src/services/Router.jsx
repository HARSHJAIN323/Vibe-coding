import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/login";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path:"/login",
    element:<Login/>
  }
]);

export default router;