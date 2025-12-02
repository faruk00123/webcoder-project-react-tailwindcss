import React from 'react'
import { CiCloudOn, CiSettings } from 'react-icons/ci'
import { ImMobile } from 'react-icons/im'
import { IoCodeSlash } from 'react-icons/io5'
import ComonCode from '../../components/ComonCode'

const ToolsSection = () => {
    const cart = [
        {
            icon: CiSettings,
            title: "Customizable Settings",
            description: "operating system that allow for personalization."
        },
        {
            icon: IoCodeSlash,
            title: "Developer-Friendly",
            description: "overall experience of software developers."
        },
        {
            icon: ImMobile,
            title: "Respondive Design",
            description: "from desktops to tablets and smartphones."
        },
        {
            icon: CiCloudOn,
            title: "Cloud Integration",
            description: "systems to enable them to share data and work together seamlessly."
        },
    ]
  return (
    <div className='max-w-screen-2xl container mx-auto py-20 px-5'>
        {/* heading  section*/}
        <div className='mb-14'>
            <ComonCode subheading="THE TOOLSYOU NEED" heading="All-in-One Solution for Your Projects"/>
        </div>

        <div className='grid sm:grid-row md:grid-cols-2 sm:items-center sm:justify-center lg:flex space-x-4'>
           
           {
            cart.map((tool, index) => (
                <div key={index} className='space-y-2 p-4 shadow-md hover:shadow-lg flex flex-col justify-center items-center'>
                    <p className='text-blue-600 text-4xl text-center'>{tool.icon}</p>
                    <h4 className='text-center text-3xl font-semibold'>{tool.title}</h4>
                    <p className='text-gray-500 text-center'>{tool.description}</p>
                </div>
            ))
           }

        </div>

        <div className='flex justify-center items-center mt-20'>
            <button className='bg-blue-500 cursor-pointer py-3 px-6 text-xl text-white hover:bg-blue-600 rounded-md'>Explore More</button>
        </div>
    </div>
  )
}

export default ToolsSection