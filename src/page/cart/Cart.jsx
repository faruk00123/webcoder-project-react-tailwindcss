import React from 'react'
import { Link, } from 'react-router'
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

const Cart = () => {
    const meet = [
            {
                img:"https://scontent.fdac179-1.fna.fbcdn.net/v/t39.30808-6/538770017_1106445471631371_7190799827787978338_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEUY-PbJ0hmN-9EpPasP1ahkx1pAeaw60GTHWkB5rDrQX8yTxQPvj7f6rJ1ocKgELRTa3R0iaMUUctajpBVz8q4&_nc_ohc=FZzhIiQiOxAQ7kNvwHgd65A&_nc_oc=Admm-3kbzi-toOyDEjFqSj5l7J30-puCunCiGUgLrPqduHJCJtNuOdbWb7-2-1UL9LE&_nc_zt=23&_nc_ht=scontent.fdac179-1.fna&_nc_gid=9vpBiYY-rqI46mhMt2nCIA&oh=00_AfgfniH8wLQK0QSLtvXPT_5Z4Sw44FQmczaE1Eq6gy2oKw&oe=692DE22C",
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






            {
                img:"https://plus.unsplash.com/premium_photo-1661608905482-786801207c50?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIwcGhvdG98ZW58MHx8MHx8fDA%3D",
                name: "Atik",
                position: "STP",
                icon: FaLinkedinIn,
                iconTow: FaFacebookF,
                iconThree: FaInstagram,
                iconRour: FiGithub,
                btn: "Contact Atik"
            },
    
            {
                img:"https://images.unsplash.com/photo-1568048560195-60278860e0f6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV3JTIwcGhvdG98ZW58MHx8MHx8fDA%3D",
                name: "Anika",
                position: "PA",
                icon: FaLinkedinIn,
                iconTow: FaFacebookF,
                iconThree: FaInstagram,
                iconRour: FiGithub,
                btn: "Contact Anika"
            },
    
    
            {
                img:"https://images.unsplash.com/photo-1619439443729-a9e3055de948?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5ldyUyMHBob3Rvc2hvb3QlMjBwb3NlfGVufDB8fDB8fHww",
                name: "Anik",
                position: "Designer",
                icon: FaLinkedinIn,
                iconTow: FaFacebookF,
                iconThree: FaInstagram,
                iconRour: FiGithub,
                btn: "Contact Anik"
            },
    
            {
                img:"https://images.unsplash.com/photo-1613065160785-71d8ea4b76b3?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmV3JTIwcGhvdG9zaG9vdCUyMHBvc2V8ZW58MHx8MHx8fDA%3D",
                name: "Tayba",
                position: "SPO",
                icon: FaLinkedinIn,
                iconTow: FaFacebookF,
                iconThree: FaInstagram,
                iconRour: FiGithub,
                btn: "Contact Tayba"
            },
        ]
        
        
  return (
    <>
     <div className="grid grid-rows-3 grid-cols-6 min-h-screen">
      <nav className="col-span-1 md:fixed hidden md:block z-40 h-screen row-span-3 bg-gray-700 pt-6">
        <div className="px-6 mb-6">
          <Link to="/" className="text-xl flex space-x-2 justify-center items-center">
                <img src="/logo.png" alt="Logo icon" />
                <span className="font-bold text-white">OmCoder</span>
              </Link>
        </div>
        <div className="px-2 mb-6">
          <div
            className="bg-white flex font-medium items-center px-4 py-2 rounded text-sm cursor-pointer"
          >
            <svg
              className="h-6 mr-4"
              viewBox="0 0 512 512"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
            >
            
              <path
                d="M448 463.746h-149.333v-149.333h-85.334v149.333h-149.333v-315.428l192-111.746 192 110.984v316.19z"
                fill="currentColor"
              ></path>
            </svg>
            Dashboard
          </div>
          <div
            className={`flex font-medium  items-center px-4 py-2 rounded text-sm text-gray-100 hover:text-white ${({isActive}) => isActive ? "text-fuchsia-600": ""}`}
          >
            <Link to="/dashboard">Web Design UI/UX</Link>
          </div>
          <div
            className="flex font-medium items-center px-4 py-2 rounded text-sm text-gray-100 hover:text-white"
          >
            <Link to="/cart" className='text-green-600'>Cart Design</Link>
          </div>
        </div>
        <div>
          <div
                      className="text-white flex justify-center items-center -ml-10 -mt-4.5"
                    >
                      <Link to="/form">Form Design</Link>
                    </div>
          <div className="mb-3">
            <div
              className="px-6 py-1 flex items-center text-sm text-white opacity-50 hover:opacity-100"
            >
              <svg
                className="bg-white fill-current h-8 mr-4 p-1 text-black w-8"
                shape-rendering="crispEdges"
                viewBox="0 0 36 36"
              >
                <path d="m28 20h-8v8h-4v-8h-8v-4h8v-8h4v8h8v4z"></path>
              </svg>
              Create Playlist
            </div>
            <div
              className="px-6 py-1 flex items-center text-sm text-white opacity-50 hover:opacity-100"
            >
              <svg
                className="bg-liked-songs fill-current h-8 mr-4 p-2 w-8"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z"
                />
              </svg>
              Liked Songs
            </div>
          </div>
          <hr className="border-gray-200 mx-6 mb-3" />
          <div>
            <div
              className="px-6 py-2 flex items-center text-sm  text-gray-100 hover:text-white"
            >
              Liked from Radio
            </div>
            <div
              className="px-6 py-2 flex items-center text-sm  text-gray-100 hover:text-white"
            >
              Discover Weekly
            </div>
          </div>
        </div>
      </nav>



      
      <main className="col-span-5 row-span-3 overflow-auto w-screen">
        <header
                          className="px-6 py-4 mb-6 bg-gray-600 flex items-center justify-between sticky top-0 z-10"
                        >
                          <div className="flex items-center">
                            <Link to="/" className="text-xl md:hidden flex space-x-2 justify-center items-center">
                                <img src="/logo.png" alt="Logo icon" />
                                <span className="font-bold text-white">OmCoder</span>
                              </Link>
                          </div>
                          <div className=''>
                            <a href="https://www.facebook.com/abubokkar.siddiq.754" target='blank'>
                              <button
                              className="text-xs cursor-pointer text-white bg-gray-500 rounded-full p-px pr-3"
                            >
                              <img
                                src="https://scontent.fdac179-1.fna.fbcdn.net/v/t39.30808-6/538770017_1106445471631371_7190799827787978338_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEUY-PbJ0hmN-9EpPasP1ahkx1pAeaw60GTHWkB5rDrQX8yTxQPvj7f6rJ1ocKgELRTa3R0iaMUUctajpBVz8q4&_nc_ohc=FZzhIiQiOxAQ7kNvwHgd65A&_nc_oc=Admm-3kbzi-toOyDEjFqSj5l7J30-puCunCiGUgLrPqduHJCJtNuOdbWb7-2-1UL9LE&_nc_zt=23&_nc_ht=scontent.fdac179-1.fna&_nc_gid=GT34DhKHfUVDXF0dxZhAdQ&oh=00_AfhuK2PHquYwDKhOYF6WSP_vd9jE2kzViNTp1sqZaMB4Bw&oe=692E1A6C"
                                className="w-7 h-7 inline-block rounded-full mr-2"
                              />
                              <span>Omar</span>
                            </button>
                            </a>
                          </div>
                        </header>
        <section className='md:ml-50'>
         <div className='md:flex flex-wrap gap-14'>
          {
                meet.map((mee, index)=>(
                    <div key={index} className='rounded-md mb-12 mr-5 max-w-sm shadow hover:shadow-xl transform duration-300'>
                        <img className='rounded-t-md hover:scale-105 h-96 w-96 transform duration-300' src={mee.img} alt="No Img" />
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
        </section>

      </main>
      <footer className="bg-black col-span-6 z-75 p-4 mb-0 grid justify-around items-center gap-6">
        <div className="flex items-center">
          <img
            className="h-14 w-14 mr-4 flex-shrink-0"
            src="https://picsum.photos/56.webp?random=10"
            alt=""
          />
          <div className="mr-4">
            <div className="text-xs text-gray-100 text-line-clamp-1">
              <span>Ludwig van Beethoven</span>
            </div>
          </div>
          <div className="flex items-center">
            <button className="text-green-200 p-2">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path
                  d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z"
                />
              </svg>
            </button>
            <button className="text-gray-100 p-2">
              <svg
                className="w-4 h-4"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="currentColor" fill-rule="evenodd">
                  <path
                    d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"
                    fill-rule="nonzero"
                  ></path>
                  <path d="M10 8h4v3h-4z"></path>
                </g>
              </svg>
            </button>
          </div>
        </div>
        <Link to="/" className='text-white flex justify-end items-center p-1'>Go to home</Link>
      </footer>
    </div>
    </>
  )
}

export default Cart