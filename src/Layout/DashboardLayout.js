import React from 'react'
import { Outlet } from 'react-router-dom'
import LeftNav from '../Components/DashBoard/LeftNav'
import Footer from '../Components/Shared-components/Footer/Footer'
import Header from '../Components/Shared-components/Header/Header'

function DashboardLayout() {
  return (
    <div>
         <div className="h-fit w-full">
            <Header></Header>
            <div className='mx-[10%]'>
                <div className="my-20 flex flex-col sm:flex-row justify-between gap-y-10">
                    <div className="w-full sm:w-[20%]">
                        <LeftNav></LeftNav>
                    </div>
                    <div className="w-full sm:w-[75%]">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    </div>
  )
}

export default DashboardLayout