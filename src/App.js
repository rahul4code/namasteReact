import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About"
import Error from "./components/Error"
import Contact from "./components/Contact"
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu.js";
import {Registration} from "./components/Registration/Registration";
// import AboutWithClass from "./components/AboutWithClass.js";

const AboutUs=lazy(()=> import("./components/AboutWithClass"));

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};


const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element :<Body />
      },
      {
        path:"/about",
        // element:<About />
        // element:<AboutWithClass/>
        element:<Suspense fallback={<h1>Loading...</h1>}><AboutUs /></Suspense>
      },
      {
        path:"/contact",
        element:<Contact />
      },
      {
        path:"/restaurantMenu/:id",
        element:<RestaurantMenu/>
      },
      {
        path:"/registration",
        element:<Registration/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
