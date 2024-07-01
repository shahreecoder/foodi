import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Shop/Menu";
import Signup from "../components/Signup";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/menu",
        element: <PrivateRouter><Menu /></PrivateRouter>
      }
    ]
  },
  {
    path : "/signup",
    element :<Signup/>
  }
]);

export default router;