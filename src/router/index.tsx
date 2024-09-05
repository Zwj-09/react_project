import React from "react";
import { Navigate } from "react-router-dom";

// 懒加载
const Home = React.lazy(() => import("@/views/Home/index"));
const Login = React.lazy(() => import("@/views/Login/index"));

const routes = [
  {
    path: "/",
    // 重定向
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default routes;
