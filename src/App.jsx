import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './components/Navbar'
import Footer from './page/home/Footer'


const App = () => {
  return (
    <>
      <Navbar/>

        <main className='min-h-screen'>
          <Outlet/> 
        </main> 
 
      <Footer/>
    </>
  )
}

export default App