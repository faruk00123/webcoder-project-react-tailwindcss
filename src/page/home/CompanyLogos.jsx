import React from 'react'
import ComonCode from '../../components/ComonCode'
import { FaApple, FaGoogle, FaGithub, FaAmazon, FaMicrosoft, FaFacebook, FaSquareYoutube, FaInstagram} from "react-icons/fa6";

const CompanyLogos = () => {
    const logos = [
        {icon:FaApple, name: "Apple"},
        {icon:FaGoogle, name: "Google"},
        {icon:FaAmazon, name: "Amazon"},
        {icon:FaMicrosoft, name: "Microsoft"},
        {icon:FaFacebook, name: "Facebook"},
        {icon:FaSquareYoutube, name: "Youtube"},
        {icon:FaInstagram, name: "Instagram"},
        {icon:FaGithub, name: "Github"},
    ]
  return (
    <div className='bg-gray-100'>
        <div className='max-w-screen-2xl container mx-auto py-20 px-5'>
            <ComonCode subheading="our trusted partners" heading="Compani We've Worked With" description="but it likely refers to a list of companies that a particular business has partnered with."/>
            
            {/* logo container */}
            <marquee>
                <div className='flex justify-center items-center'>
                <div className='grid space-y-6 lg:grid-cols-8 grid-cols-4 items-center justify-center md:space-x-14 space-x-8 mt-14'>
                    {
                        logos.map((logo, index) => (
                            <div key={index} className='p-6 w-28 h-28 hover:scale-110 transition transform flex justify-center items-center  cursor-pointer bg-white rounded-full'>
                                <logo.icon className='text-blue-600 text-4xl' title={logo.name}/>
                            </div>
                        ))
                    }
                </div>
            </div>
            </marquee>
        </div>
    </div>
  )
}

export default CompanyLogos