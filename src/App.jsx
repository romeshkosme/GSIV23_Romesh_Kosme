import './App.css'
import React, {Suspense} from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/store';
import Wrapper from './components/Wrapper';
import ErrorBoundary from './components/ErrorBoundary';
const Home = React.lazy(() => import("./pages/Home"));
const Movie = React.lazy(() => import("./pages/Movie"));
const PageNotFound = React.lazy(() => import ("./pages/Error404"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "movie/:id",
      element: <Movie />
    },
    {
      path: "/*",
      element: <PageNotFound />
    }
  ]);
  return (
    <>
      <ErrorBoundary fallback={<><p>Something went wrong</p></>}>
        <Provider store={store}>
          <Suspense fallback={<div>Loading..</div>}>
            <Wrapper>
              <RouterProvider router={router} />
            </Wrapper>
          </Suspense>
        </Provider>
      </ErrorBoundary>
    </>
  )
}

export default App
