import { Navigate } from "react-router-dom"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { LoginPage } from "../auth"
import { HeroesApp } from "../HeroesApp";
import { DcPage, HeroPage, MarvelPage, SearchPage} from "../heroes";
import { ErrorPage } from "../ui/components/ErrorPage";

const router = createBrowserRouter([
  {
    path: '/',    
    element: <HeroesApp/>,
    errorElement: <ErrorPage/>,
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
        element: <SearchPage/>
      },
      {
        path: '/hero/:id',
        element: <HeroPage/>
      }
    ],
  },
  {
    path: 'login',
    element: <LoginPage/>,
  },  
])

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={ router }/>
    </>
  )
}
