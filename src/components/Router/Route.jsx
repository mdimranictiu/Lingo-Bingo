import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import MyProfile from "../MyProfile/MyProfile";
import UpdateProfile from "../UpdateProfile/UpdateProfile";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import StartLearning from "../StartLearning/StartLearning";
import AboutUS from "../AboutUS/AboutUS";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import Lesson from "../Lesson/Lesson";
import Tutorials from "../Tutorials/Tutorials";

   export const router = createBrowserRouter([
        {
          path: "/",
          element: <Root></Root>,
          errorElement: <ErrorPage></ErrorPage>,
          children:[
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/my-profile',
                element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
            },
            {
                path:'/update-profile',
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            },
            {
                path:'/lesson',
                element: <PrivateRoute><Lesson></Lesson></PrivateRoute>
            },
            {
                path:'/tutorials',
                element: <PrivateRoute><Tutorials></Tutorials></PrivateRoute>
            },
            {
                path:'/start-learning',
                element: <StartLearning></StartLearning>,
            },
            {
                path:'/about-us',
                element: <AboutUS></AboutUS>
            },
            {
                path:'/forgot-password',
                element: <ForgotPassword></ForgotPassword>
            }
          ]
        },
        
      ]);


