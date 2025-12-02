import React from 'react'
import ComonCode from '../../components/ComonCode'
import { FaCalendar, FaBuildingUser, FaChartLine, FaTruck} from "react-icons/fa6";

const Explore = () => {
    const carta = [
        {
            icon: FaCalendar,
            desctiption: "A calendar is a system of organizing days. This is done by giving names to periods of time, typically days, weeks, months and years. A date is the designation of a single and specific day within such a system. A calendar is also a physical record (often paper) of such a system."
        },
        {
            icon: FaBuildingUser,
            desctiption: "A user is a casual name given to an individual who interacts with a website, online service, app or platform in any way. For example, the user of a website is someone who visits the site. The user of a mobile app is someone who downloads the mobile app."
        },
        {
            icon: FaChartLine,
            desctiption: "A line chart (or line graph) is a type of chart used to display information as a series of data points, called , connected by straight line segments. It is most commonly used to visualize a trend in data over continuous intervals, especially time. "
        },
        {
            icon: FaTruck,
            desctiption: "A truck (North American and Australian English) or lorry (British English) is a motor vehicle designed to transport freight, carry specialized payloads, or perform other utilitarian work."
        },
    ]
  return (
    <div>
        <div className='max-w-screen-2xl container mx-auto py-20 px-5'>
            <div className='flex max-w-4xl justify-center items-center mx-auto text-center'>
              <ComonCode subheading="services" heading="Explore Our Range Of Professional Services Tailored To Meet Your Business Needs." description="The term services webcode likely refers to web development tools or online platforms that offer functionalities related to creating, editing, and displaying web code and text. These services can include code editors, generators, and learning platforms that handle languages such as HTML, CSS, and JavaScript. "/>
            </div>

            <div className='mt-20'>
            <div className='grid md:grid-cols-2 mr-20 ml-20 justify-center items-center mx-auto gap-20'>
                {
                    carta.map((cart, index) => (
                        <div key={index} className='text-center flex flex-col transition-all duration-200 space-y-4 py-10 px-6 max-w-xl hover:shadow-2xl items-center justify-center'>
                            <cart.icon className='text-blue-600 text-4xl'/>
                            <p>{cart.desctiption}</p>
                        </div>
                    ))
                }
            </div>
            </div>
             <div className='flex justify-center items-center mt-20'>
                 <button className='bg-blue-500 cursor-pointer py-3 px-6 text-xl text-white hover:bg-blue-600 rounded-md'>Explore More</button>
             </div>
        </div>
    </div>
  )
}

export default Explore