import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Vendre from "./pages/Vendre";
import Acheter from "./pages/Acheter";
import Createmanga from "./pages/Createmanga";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Single from "./pages/Single";
import Chapter from "./pages/Chapter";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./style.scss";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/acheter",
        element: <Acheter />,
      },
      {
        path: "/vendre",
        element: <Vendre />,
      },
      {
        path: "/createmanga",
        element: <Createmanga />,
      },
      {
        path: "/post/:postId/chapter/:chapterId",
        element: <Chapter />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
