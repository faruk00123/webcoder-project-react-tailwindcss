import React from 'react'
import ComonCode from '../../components/ComonCode'
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

const MeetSections = () => {
    const meet = [
        {
            img:"https://images.unsplash.com/photo-1657809233285-1f42bd176039?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Omar",
            position: "CEO",
            icon: FaLinkedinIn,
            iconTow: FaFacebookF,
            iconThree: FaInstagram,
            iconRour: FiGithub,
            btn: "Contact Omar"
        },

        {
            img:"https://plus.unsplash.com/premium_photo-1667518257577-c410f3fc8db6?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Mim",
            position: "CTO",
            icon: FaLinkedinIn,
            iconTow: FaFacebookF,
            iconThree: FaInstagram,
            iconRour: FiGithub,
            btn: "Contact Mim"
        },


        {
            img:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Arif",
            position: "Devloper",
            icon: FaLinkedinIn,
            iconTow: FaFacebookF,
            iconThree: FaInstagram,
            iconRour: FiGithub,
            btn: "Contact Arif"
        },

        {
            img:"https://plus.unsplash.com/premium_photo-1661768742069-4de270a8d9fa?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Sumaiya",
            position: "SEO EXPART",
            icon: FaLinkedinIn,
            iconTow: FaFacebookF,
            iconThree: FaInstagram,
            iconRour: FiGithub,
            btn: "Contact Sumaiya"
        },
    ]
  return (
    <div className='max-w-screen-2xl container mx-auto py-20 px-5 bg-pink-100'>
        <div className='flex flex-col justify-center items-center'>
        <div className='mb-20'>
            <ComonCode subheading="our team" heading="Meet The Experts"/>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {
                meet.map((mee, index)=>(
                    <div key={index} className='rounded-md shadow hover:shadow-xl transform duration-300'>
                        <img className='rounded-t-md opacity-35 hover:opacity-100 transform duration-300' src={mee.img} alt="No Img" />
                        <h2 className='text-2xl px-2 pt-2 font-bold text-pink-600'>{mee.name}</h2>
                        <p className='px-2 text-gray-500 text-sm pt-1'>{mee.position}</p>
                        <div className='flex space-x-3 px-2 py-4'>
                            <mee.icon className='hover:scale-110 text-blue-600 text-xl transform duration-300 cursor-pointer'/>
                            <mee.iconTow className='hover:scale-110 text-blue-600 text-xl transform duration-300 cursor-pointer'/>
                            <mee.iconThree className='hover:scale-110 text-blue-600 text-xl transform duration-300 cursor-pointer'/>
                            <mee.iconRour className='hover:scale-110 text-blue-600 text-xl transform duration-300 cursor-pointer'/>
                        </div>
                        <button className='bg-blue-500 mb-2 mt-4 cursor-pointer py-3 px-5 rounded-full hover:bg-blue-600 transition-all duration-200 text-white flex justify-center items-center mx-auto '>{mee.btn}</button>
                    </div>
                ))
            }
        </div>
        </div>
    </div>
  )
}

export default MeetSections