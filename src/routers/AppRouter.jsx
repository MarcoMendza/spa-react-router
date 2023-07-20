import { Navigate } from "react-router-dom"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { LoginPage } from "../auth"
import { HeroesApp } from "../HeroesApp";
import { DcPage, MarvelPage} from "../heroes";
import { ErrorPage } from "../ui/components/ErrorPage";

const router = createBrowserRouter([
  {
    path: '/',    
    element: <HeroesApp/>,
    children: [
      {
        index: true,
        element: <Navigate to={'/marvel'}/>
      },
      {
        path: '/dc',
        element: <DcPage/>
      },
      {
        path: '/marvel',
        element: <MarvelPage/>
      },
      {
        path: '/search',
        element: <MarvelPage/>
      }
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: 'login',
    element: <LoginPage/>,
    errorElement: <ErrorPage />,
  },  
])

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={ router }/>
    </>
  )
}
