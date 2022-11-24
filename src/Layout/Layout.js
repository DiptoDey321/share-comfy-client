import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Shared-components/Footer/Footer'
import Header from '../Components/Shared-components/Header/Header'

function Layout() {
  return (
    <div>
         <div className="h-fit w-full">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    </div>
  )
}

export default Layout