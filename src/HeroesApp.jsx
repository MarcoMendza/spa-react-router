import React from 'react'
//import { AppRouter } from './routers/AppRouter'
import { Outlet } from 'react-router-dom'
import { Navbar } from './ui/components/NavBar'

export const HeroesApp = () => {
  return (
    <>    
        <Navbar/>
        <Outlet/>
    </>
  )
}
 