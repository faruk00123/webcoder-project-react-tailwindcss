import React from 'react'
import ComonCode from '../../components/ComonCode'

const NewsLetter = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto py-20 px-5'>
        <div className='flex justify-center mx-auto items-center max-w-4xl text-center'>
            <ComonCode heading="Set Updated with Our Newsletter" description="Use compelling language to encourage opens. Instead of a generic subject like Newsletter UpdateNew and Improved: How we updated our newsletter Stay updated with important news Ensure your message is concise and focuses on the most significant updates without diluting the newsletter's primary purpose."/>
        </div>
        <div className='flex justify-center items-center space-x-8 mt-16'>
            <button className='border py-3 px-6 rounded-md bg-blue-600 text-white transition-all duration-200 border-gray-600 cursor-pointer hover:bg-blue-700'>Subscribe New</button>
            <button className='border py-3 px-6 rounded-md border-gray-500 cursor-pointer hover:border-pink-600 transition-all duration-200'>Learn More</button>
        </div>
    </div>
  )
}

export default NewsLetter