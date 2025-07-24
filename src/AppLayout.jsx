import React from 'react'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import SideBar from './components/common/SideBar'
import { Outlet } from 'react-router'
import { ToastContainer } from 'react-toastify'


export default function AppLayout() {
    return (
        <>

            <ToastContainer />

            <section className='w-full'>
                <div className='grid grid-cols-[15%_auto] gap-5'>

                    <div className=''>
                        <SideBar />
                    </div>
                    <div>
                        <Header />

                        <Outlet />

                        <Footer />

                    </div>
                </div>
            </section>

        </>
    )
}