import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { AuthContext } from '../contexts/AuthProvider'
import LoadingSkeleton from '../components/LoadingSkeleton'

function Main() {
  const { loading } = useContext(AuthContext);
  return (
    <div> {
      loading ? <LoadingSkeleton/>: 
      <div className='bggradient' >
        <Navbar />
        <div className='min-h-screen'>
          <Outlet />
        </div>
        <Footer />
      </div>
    }
    </div>

  )
}

export default Main