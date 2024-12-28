import Footer from '@/component/Footer'
import Header from '@/component/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Header />
      <div className='md:mx-16 mx-5'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Layout
