import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Restaurant from "./components/RestaurantDetails/Restaurant";
import { Registration } from "./components/Registration/Registration";
import UserContext from "./utils/UserContext.js";
import store from "./store.js";
import { Provider } from "react-redux";
// import AboutWithClass from "./components/AboutWithClass.js";

const AboutUs = lazy(() => import("./components/AboutWithClass"));

const Layout = () => {
  const [user, setUser]=useState({name:'Sign In', email:'Not Present'});

  return (
    <>
      <Provider store={store}>
        <UserContext.Provider value={{user, setUser}}>
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        // element:<About />
        // element:<AboutWithClass/>
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurantdetails/:id",
        element: <Restaurant />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
