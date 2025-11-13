import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='min-h-screen bg-white/90 text-slate-950 dark:bg-neutral-900 dark:text-white'>
        <Nav/>
        <main>
            <Outlet />
        </main>
        <Footer/>
    </div>
  )
}

export default Layout
