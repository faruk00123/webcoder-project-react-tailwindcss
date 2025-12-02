import React from 'react'
import { Link,} from 'react-router'

const Dashboard = () => {
  const cart = [
      {
        img: "https://cdn.dribbble.com/userupload/20585018/file/still-3a3c949581639300f2b07079424abbf5.png?format=webp&resize=450x338&vertical=center"
      },
      {
        img: "https://cdn.dribbble.com/userupload/16467699/file/still-66b588da559b992bf1a388f31d96a7bb.png?format=webp&resize=400x300&vertical=center"
      },
      {
        img: "https://cdn.dribbble.com/userupload/16375464/file/still-8a506de1920568d6720f63b130eadc6b.png?format=webp&resize=450x338&vertical=center"
      },
      {
        img: "https://cdn.dribbble.com/userupload/15936351/file/original-5b10e3625a54f659d4a0e7fe4e6083ec.png?format=webp&resize=450x338&vertical=center"
      },
      {
        img: "https://cdn.dribbble.com/userupload/36211659/file/still-7d6c3e62df5335bbe44591976637d720.png?format=webp&resize=450x338&vertical=center"
      },
      {
        img: "https://cdn.dribbble.com/userupload/44548845/file/still-fb28037f9169ec62dcd84691214fc371.png?format=webp&resize=450x338&vertical=center"
      },
      {
        img: "https://cdn.dribbble.com/userupload/18448527/file/still-b00b261dded2f1d61749521e2f4b18cf.png?format=webp&resize=450x338&vertical=center"
      },
      {
        img: "https://cdn.dribbble.com/userupload/19662942/file/original-deb50ab446a5709553ce4b89dcc02cb0.png?format=webp&resize=450x338&vertical=center"
      },
      {
        img: "https://cdn.dribbble.com/userupload/17878524/file/still-436e5e7ef532714fc03624b9a657dfb9.png?format=webp&resize=450x338&vertical=center"
      },
      {
        img: "https://cdn.dribbble.com/userupload/37441340/file/still-19decc8cea30225262c30b864750370d.png?format=webp&resize=450x338&vertical=center"
      },
      {
        img: "https://cdn.dribbble.com/userupload/16100140/file/original-f1f3a18a4925ee9d4c33c195623deb2e.png?format=webp&resize=450x338&vertical=center"
      },
      {
        img: "https://cdn.dribbble.com/userupload/20585018/file/still-3a3c949581639300f2b07079424abbf5.png?format=webp&resize=450x338&vertical=center"
      },
      {
        img: "https://cdn.dribbble.com/userupload/16139767/file/original-7a40050a9475c522799f176b6484f5aa.png?format=webp&resize=450x338&vertical=center"
      },
      {
        img: "https://cdn.dribbble.com/userupload/25286809/file/original-0a2ba3c6dd8a133111981eb7414e28a8.png?format=webp&resize=450x338&vertical=center"
      },
      {
        img: "https://cdn.dribbble.com/userupload/16624420/file/still-bf4e20d0dc7347734cbf5973d84e80fb.png?format=webp&resize=450x338&vertical=center"
      },
      {
        img: "https://cdn.dribbble.com/userupload/19573488/file/original-3a21d294a86f6784837277caa5d2723f.png?format=webp&resize=450x338&vertical=center"
      },
      {
        img: "https://cdn.dribbble.com/userupload/16034271/file/original-1782ad8e37e55455f244376708f986f9.png?crop=0x0-3201x2401&format=webp&resize=450x338&vertical=center"
      },
      {
        img: "https://cdn.dribbble.com/userupload/19342833/file/original-a28458f7f0e89b613de8f7873db20593.png?format=webp&resize=450x338&vertical=center"
      },
      {
        img: "https://cdn.dribbble.com/userupload/29997326/file/original-16431bbcabcb4abe77fe6f560c791c82.png?format=webp&resize=450x338&vertical=center"
      },


      {
        img: "https://cdn.dribbble.com/userupload/14826460/file/still-6376723b9cc707c030bdf4280edf9b5d.png?format=webp&resize=450x338&vertical=center"
      },
      {
        img: "https://cdn.dribbble.com/userupload/14447068/file/original-c7a2690b6e28b2df0f1ce65e352243d8.png?format=webp&resize=450x338&vertical=center"
      },
      {
        img: "https://cdn.dribbble.com/userupload/36211659/file/still-7d6c3e62df5335bbe44591976637d720.png?format=webp&resize=450x338&vertical=center"
      },
      {
        img: "https://cdn.dribbble.com/userupload/19662942/file/original-deb50ab446a5709553ce4b89dcc02cb0.png?format=webp&resize=450x338&vertical=center"
      },
      {
        img: "https://cdn.dribbble.com/userupload/15643343/file/still-cdd2f84cada02e31b1f20deaca69dcb3.png?format=webp&resize=450x338&vertical=center"
      },
      {
        img: "https://cdn.dribbble.com/userupload/19573488/file/original-3a21d294a86f6784837277caa5d2723f.png?format=webp&resize=450x338&vertical=center"
      },
      {
        img: "https://cdn.dribbble.com/userupload/16034271/file/original-1782ad8e37e55455f244376708f986f9.png?crop=0x0-3201x2401&format=webp&resize=450x338&vertical=center"
      },
      {
        img: "https://cdn.dribbble.com/userupload/19342833/file/original-a28458f7f0e89b613de8f7873db20593.png?format=webp&resize=450x338&vertical=center"
      },
      {
        img: "https://cdn.dribbble.com/userupload/29997326/file/original-16431bbcabcb4abe77fe6f560c791c82.png?format=webp&resize=450x338&vertical=center"
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
            <Link to="/dashboard"  className='text-blue-600'>Web Design UI/UX</Link>
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
        <section className='md:flex flex-wrap md:ml-50'>
         <div className=''>
          {
            cart.map((car, index)=>(
              <div key={index} className="hover-3d px-6 py-6 cursor-pointer">
  
                <figure className="max-w-100 rounded-2xl">
                  <img src={car.img} alt="" />
                </figure>
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

export default Dashboard