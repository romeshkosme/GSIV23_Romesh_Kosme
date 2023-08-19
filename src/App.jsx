import './App.css'
import React, {Suspense} from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/store';
import Wrapper from './components/Wrapper';
const Home = React.lazy(() => import("./pages/Home"));
const Movie = React.lazy(() => import("./pages/Movie"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "movie/:id",
      element: <Movie />
    }
  ]);
  return (
    <>
      {/* <React.StrictMode> */}
        <Provider store={store}>
          <Suspense fallback={<div>Loading..</div>}>
            <Wrapper>
              <RouterProvider router={router} />
            </Wrapper>
          </Suspense>
        </Provider>
      {/* </React.StrictMode> */}
    </>
  )
}

export default App
