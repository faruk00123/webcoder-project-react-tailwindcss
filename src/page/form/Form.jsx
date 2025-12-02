import React from 'react'
import { Link } from 'react-router'

const Form = () => {
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
            <Link to="/cart">Cart Design</Link>
          </div>
        </div>
        <div>
          <div
            className="text-white flex justify-center items-center -ml-10 -mt-4.5"
          >
            <Link to="/form" className='text-pink-600'>Form Design</Link>
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



        <section className='md:flex flex-wrap md:ml-50 gap-6'>

            <div className='bg-green-200 shadow-md space-y-2 max-h-42 p-2'>
                <h2 className='text-center text-xl font-bold'>Form One</h2>
                <form className='space-y-2'>
                    <div className='space-x-1'>
                        <label>Name:</label>
                        <input className='border p-1 w-50 border-gray-400' type="text" name='name' id='name'/>
                    </div>

                    <div className='space-x-2'>
                        <label>Email:</label>
                        <input className='border p-1 w-50 border-gray-400' type="email" name='email' id='email'/>
                    </div>
                    <button type='submit' className='bg-blue-500 py-1 px-3 rounded flex justify-center items-center mx-auto text-white'>Submit</button>
                </form>
            </div>




            <div className='bg-pink-200 rounded-md shadow-md max-h-74 w-70 flex flex-col justify-center items-center space-y-2 p-4'>
                <h2 className='text-center text-xl font-bold'>Form Two</h2>
                <form className='space-y-2'>
                    <div className='space-x-1'>
                        <label className='block'>Name:</label>
                        <input className='border rounded focus:ring-1 focus:outline-none focus:ring-green-600 p-1 w-50 border-gray-400' type="text" name='name' id='name'/>
                    </div>

                    <div className='space-x-2'>
                        <label className='block'>Email:</label>
                        <input className='border rounded focus:ring-1 focus:outline-none focus:ring-green-600 p-1 w-50 border-gray-400' type="email" name='email' id='email'/>
                    </div>
 
                    <div className='space-x-2'>
                        <label className='block'>Password:</label>
                        <input className='border rounded focus:ring-1 focus:outline-none focus:ring-green-600 p-1 w-50 border-gray-400' type="password" name='password' id='password'/>
                    </div>

                    <button type='submit' className='bg-blue-500 w-full -mb-2 py-1 px-3 rounded flex justify-center items-center mx-auto text-white'>Submit</button>
                </form>
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

export default Form