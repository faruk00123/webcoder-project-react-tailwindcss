import React from 'react'
import ComonCode from '../../components/ComonCode'

const Blogs = () => {

  const cart = [
    {
      img:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      comoncode: <ComonCode subheading="technology" heading="Web content and writing" description="Website text is a crucial part of a site's content and is optimized for online readability and search engines."/>,
      logo: "./public/parsonalPhoto/1726940707454.jpg",
      name: "Omor",
      title: "Web Developer"

    },
    {
      img:"https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      comoncode: <ComonCode subheading="design" heading="design, UI/UX" description="The markup language for It uses tags to define elements like headings, lists, and paragraphs."/>,
      logo: "https://randomuser.me/api/portraits/men/28.jpg",
      name: "Tamim",
      title: "UT/UX Designer"

    },
    {
      img:"https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      comoncode: <ComonCode subheading="development" heading="Full-stack development" description="overs both front-end and back-end development."/>,
      logo: "https://randomuser.me/api/portraits/women/64.jpg",
      name: "Sumi",
      title: "Web developer"

    },
    {
      img:"https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      comoncode: <ComonCode subheading="business" heading="Business fundamentals" description="Specializing in a specific industry or type of website can make it easier to market your services."/>,
      logo: "https://randomuser.me/api/portraits/men/35.jpg",
      name: "Sakib",
      title: "Web developer"

    },
  ]
  return (
    <div className="max-w-screen-2xl container mx-auto py-20 px-5">
  <div className="flex flex-col justify-center items-center">
    <div>
      <ComonCode subheading="our blogs" heading="Latest Articles And Insights" />
    </div>

    <div className="mt-16 w-full">
      {/* Grid Start */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {
        cart.map((cat, index) => (
          <div key={index} className="bg-white cursor-pointer rounded-xl shadow hover:shadow-xl">
            <img className="rounded-t-xl hover:scale-105 transition-all duration-200" src={cat.img} alt="No img" />

            <div className="px-4">
              <div className="-mt-20">{cat.comoncode}</div>

              <div className="flex p-4 items-center space-x-2">
                <img className="rounded-full opacity-40 hover:opacity-100 hover:scale-105 transition-all duration-200 w-12 h-12" src={cat.logo} alt="No logo" />
                <div>
                  <h4 className="text-xl text-green-600 font-bold">{cat.name}</h4>
                  <p className="text-gray-500 text-sm">{cat.title}</p>
                </div>
              </div>
            </div>

          </div>
        ))
        }
      </div>
      {/* Grid End */}
    </div>

  </div>
</div>
  )
}

export default Blogs