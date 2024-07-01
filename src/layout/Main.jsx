import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Main() {
  return (
    <div className='bggradient' >
      <Navbar />
      <div className='min-h-screen'>
        <Outlet />
      </div>

      <Footer />

    </div>
  )
}

export default Main