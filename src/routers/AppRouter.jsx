import { Navigate } from "react-router-dom"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { AuthProvider, LoginPage } from "../auth"
import { HeroesApp } from "../HeroesApp";
import { DcPage, HeroPage, MarvelPage, SearchPage} from "../heroes";
import { ErrorPage } from "../ui/components/ErrorPage";
import { PrivateRoute } from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "login",
    element: <LoginPage />,
    errorElement: <ErrorPage/>
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <HeroesApp />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Navigate to={"/marvel"} />,
      },
      {
        path: "/dc",
        element: <DcPage />,
      },
      {
        path: "/marvel",
        element: <MarvelPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/hero/:id",
        element: <HeroPage />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return (
    <AuthProvider>
      <RouterProvider router={ router }/>
    </AuthProvider>
    
  )
}
