import './App.css'
import React, {Suspense} from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const Home = React.lazy(() => import("./pages/Home"));
const Movie = React.lazy(() => import("./pages/Movie"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "movie",
      element: <Movie />
    }
  ]);
  return (
    <>
      <React.StrictMode>
        <Suspense fallback={<div>Loading..</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </React.StrictMode>
    </>
  )
}

export default App
