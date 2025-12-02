import React, { useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

import bannerImg from "../../assets/banner.png"
import { FaRegPlayCircle } from 'react-icons/fa'
const HeroSection = () => {
    const [showModal, setShowModal] = useState(false);
    const openModal = ()=> {
        setShowModal(true)
    }
    const closeModal = ()=> {
        setShowModal(false)
    }
  return (
    <div className='bg-blue-50'>
        <div className='max-w-screen-2xl container mx-auto py-20 px-5 flex flex-col lg:flex-row justify-between items-center'>
            {/* left */}
            <div className='lg:w-1/2 text-center lg:text-left'> 
                <h1 className='font-bold text-4xl text-gray-800 mb-4'>Build Your Dream Website</h1>
                 <p className='text-lg text-gray-600 mb-6'>choose a builder, define the site's purpose, select a domain name and hosting, and then add pages and create engaging content.</p>
                <div className='flex flex-col md:flex-row  justify-center lg:justify-start space-x-5 transition-all duration-200'>
                    <button className='flex items-center space-x-2 justify-center text-white py-3 px-6 rounded bg-blue-500 hover:bg-blue-600 transition-all duration-200 cursor-pointer'>
                        <span>Get Started</span>
                        <FaArrowRightLong />
                    </button>
                    <button className='py-3 px-6 text-blue-600 hover:text-white hover:border-blue-500 border rounded hover:bg-blue-500'>Contact Us</button>
                </div>
            </div>
            
            {/* Right */}
            <div className='lg:w-1/2 mt-10 lg:mt-0 flex justify-end relative'>
                <div className='hover:opacity-90 relative group transition-all duration-300'>
                    <img src={bannerImg} alt="banner img"/>
                    <button onClick={openModal} className='absolute inset-0 hover:opacity-90 flex justify-center items-center'>
                        <FaRegPlayCircle className='text-white cursor-pointer hover:text-blue-600 text-5xl'/>
                    </button>
                </div>
            </div>

            {/* Modal */}
            {
                showModal && <div className='bg-black/60 bg-opacity-40 z-50 fixed inset-0 flex items-center justify-center'>
                    <div className='bg-white p-5 rounded-lg shadow-lg relative max-w-xl w-full'>
                        <button className='cursor-pointer hover:text-red-600 -mt-10 text-5xl' onClick={closeModal}>&times;</button>
                        <iframe className='pr-5' width="560" height="315" src="https://www.youtube.com/embed/NWnBxQjssvQ?si=yqqNRo-iNIhO5mKF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            }
        </div>
    </div>
  )
}

export default HeroSection