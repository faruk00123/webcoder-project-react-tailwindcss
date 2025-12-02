import React from 'react'
import errorIcon from "../../assets/rocket-icon.png"
import { Link } from 'react-router'

const ErrorPage = ({message="page not found", code= 404}) => {
  return (
    <div className='flex flex-col items-center justify-center text-center min-h-screen space-y-5'>
        <img src={errorIcon} alt="Img is not found"/>
        <h2 className='text-4xl font-bold to-gray-700'>{message}</h2>
        <p className='text-xl text-gray-500'>Error {code}!</p>
        <p className='text-[#21272A] md:w-2/5 w-full mx-auto'>Sorry! The page you’re looking for can’t be found.
It may have been removed, renamed, or the link might be incorrect.
Please check the URL and try again.
You can return to the homepage to continue browsing.
If the issue continues, feel free to contact us for help.</p>
      
      <Link to="/" className='bg-blue-600 py-3 mt-6 px-6 shadow-md rounded-full text-white hover:bg-blue-700 transition duration-200'>Go to Home Page</Link>
      
    </div>
  )
}

export default ErrorPage