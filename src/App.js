import Header from "./components/Header";

import React, { lazy , Suspense} from "react";

import ReactDOM  from "react-dom/client";

import Footer from "./components/Footer";

import Body from "./components/Body";

import About from "./components/About";

import Contact from "./components/Contact";

import RestaurantMenu from "./components/RestaurantMenu";

import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";

import Shimmer from "./components/Shimmer";

import Cart from "./components/Cart";

import { Provider } from "react-redux";

import store from "./utils/store";


const Instamart = lazy(() => import("./components/Instamart"));



const AppLayout = () =>{
  return(
    <>
    <Provider store = {store}>
    <Header />
    <Outlet />
    <Footer />
    </Provider>
    </>
  );
};

const appRouter = createBrowserRouter(
  [
{
  path:"/",
  element : <AppLayout />,
  children : [
    {
      path:"/",
      element : <Body />
    },
    {
      path:"/about",
      element : <About />
    },
    {
      path:"/contact",
      element : <Contact />
    },
    {
      path:"/restaurant/:id",
      element : <RestaurantMenu />
    },
    {
      path:"/instamart",
      element : (<Suspense fallback={<Shimmer />}>
        <Instamart />
      </Suspense>)
    },
    {
      path:"/cart",
      element : <Cart />
    },
  ]
},

  ]
)



const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(<RouterProvider router={appRouter} />);





