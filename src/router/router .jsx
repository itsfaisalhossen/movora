import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Loading from "../components/Loading";
import Home from "../pages/Home";
import MovieListing from "../pages/MovieListing";
import ScrollToTop from "../components/ScrollToTop";
import Error from "../pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <HomeLayout />
      </>
    ),
    hydrateFallbackElement: <Loading />,
    children: [
      { index: true, element: <Home /> },
      { path: "movie-listing", element: <MovieListing /> },
    ],
  },

  { path: "/*", element: <Error /> },
]);
