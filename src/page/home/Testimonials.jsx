import React from "react";
import ComonCode from "../../components/ComonCode";
import {
  FaAmazon,
  FaApple,
  FaGoogle,
  FaMicrosoft,
} from "react-icons/fa6";

const Testimonials = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-screen-2xl container mx-auto py-20 px-5">
        <div className="mb-22">
          <ComonCode subheading="testmonials" heading="What Out Clients Say"/>
        </div>

        <div>
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">

              <div className="bg-green-200 p-4 rounded hover:shadow-2xl flex flex-col max-w-3xl justify-center items-center mx-auto space-y-6">
                <FaApple className="text-6xl mb-4 text-blue-600 mx-auto my-2 object-contain"/>
                <h3 className="-mt-4 text-3xl font-bold text-blue-600">Apple</h3>
                <p className="text-center text-gray-700">Apple's secure messaging service, iMessage, which is used for communication between Apple devices; Messages for Business, a service that allows customers to chat with Apple and other businesses directly within the Messages app; and Apple's official communications.</p>
                <div className="flex space-y-1 mt-2 flex-col justify-center items-center">
                   <div className="size-10 rounded-full bg-green-400 p-6 flex items-center justify-center text-blue-600 text-2xl font-bold">A</div>
                   <p className="text-green-600"><span className="text-xl text-blue-600">CEO</span>: Tim Cook.</p>
                   <p className="text-green-600"><span className="text-xl text-blue-600">Date</span>: position since 2011.</p>
                </div>
              </div>

              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              
              <div className="bg-green-200 p-4 rounded hover:shadow-2xl flex flex-col max-w-3xl justify-center items-center mx-auto space-y-6">
                <FaGoogle className="text-6xl mb-4 text-blue-600 mx-auto my-2 object-contain"/>
                <h3 className="-mt-4 text-3xl font-bold text-blue-600">Google</h3>
                <p className="text-center text-gray-700">Pichai Sundararajan (born June 10, 1972), better known as Sundar Pichai, is an Indian-American business executive. He is the chief executive officer (CEO) of Alphabet Inc. and its subsidiary Google. Alphabet Inc.</p>
                <div className="flex space-y-1 mt-2 flex-col justify-center items-center">
                   <div className="size-10 rounded-full bg-green-400 p-6 flex items-center justify-center text-blue-600 text-2xl font-bold">G</div>
                   <p className="text-green-600"><span className="text-xl text-blue-600">CEO</span>: Sundar Pichai.</p>
                   <p className="text-green-600"><span className="text-xl text-blue-600">Date</span>: position since 2001.</p>
                </div>
              </div>

              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              
              <div className="bg-green-200 p-4 rounded hover:shadow-2xl flex flex-col max-w-3xl justify-center items-center mx-auto space-y-6">
                <FaAmazon className="text-6xl mb-4 text-blue-600 mx-auto my-2 object-contain"/>
                <h3 className="-mt-4 text-3xl font-bold text-blue-600">Amazon</h3>
                <p className="text-center text-gray-700">Amazon offers a "Text Trace" service that sends delivery and tracking updates via SMS for trackable items dispatched by Amazon (not all third-party sellers). </p>
                <div className="flex space-y-1 mt-2 flex-col justify-center items-center">
                   <div className="size-10 rounded-full bg-green-400 p-6 flex items-center justify-center text-blue-600 text-2xl font-bold">A</div>
                   <p className="text-green-600"><span className="text-xl text-blue-600">CEO</span>: Malik.</p>
                   <p className="text-green-600"><span className="text-xl text-blue-600">Date</span>: position since 1994.</p>
                </div>
              </div>

              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              
              <div className="bg-green-200 p-4 rounded hover:shadow-2xl flex flex-col max-w-3xl justify-center items-center mx-auto space-y-6">
                <FaMicrosoft className="text-6xl mb-4 text-blue-600 mx-auto my-2 object-contain"/>
                <h3 className="-mt-4 text-3xl font-bold text-blue-600">Microsoft</h3>
                <p className="text-center text-gray-700">Microsoft creates platforms and tools powered by AI to deliver innovative solutions that meet the evolving needs of our customers. The technology company is committed to making AI available broadly and doing so responsibly, with a mission to empower every person and every organization on the planet to achieve more.</p>
                <div className="flex space-y-1 mt-2 flex-col justify-center items-center">
                   <div className="size-10 rounded-full bg-green-400 p-6 flex items-center justify-center text-blue-600 text-2xl font-bold">M</div>
                   <p className="text-green-600"><span className="text-xl text-blue-600">CEO</span>: Malik.</p>
                   <p className="text-green-600"><span className="text-xl text-blue-600">Date</span>: position since 1975.</p>
                </div>
              </div>

              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
