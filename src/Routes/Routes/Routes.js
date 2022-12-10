import { createBrowserRouter } from "react-router-dom";
import Category from "../../layout/Pages/Category/Category/Category";
import Profile from "../../layout/Pages/Category/Category/Profile/Profile";
import Home from "../../layout/Pages/Home/Home";
import Login from "../../layout/Pages/Login/Login/Login";
import Register from "../../layout/Pages/Login/Register/Register";
import News from "../../layout/Pages/News/News/News";
import TermsAndConditions from "../../layout/Pages/Shared/TermsAndConditions/TermsAndConditions";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Main from "./../../layout/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:() => fetch('http://localhost:5000/')
      },
      {
        path: "/home",
        element: <Home></Home>,
        loader:() => fetch('http://localhost:5000/')
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/news/:id",
        element: <PrivateRoutes><News></News></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>
       
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/terms",
        element: <TermsAndConditions></TermsAndConditions>
      },
      {
        path: "/profile",
        element: <PrivateRoutes><Profile></Profile></PrivateRoutes>,
      },
    ],
  },
]);
