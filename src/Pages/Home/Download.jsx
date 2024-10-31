import { FaApple } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";

import img from '../../assets/images/banner-onlineapp.png'

const Download = () => {
  return (
    <div className="container mx-auto my-24">
      <div className="bg-[#ffc107] flex flex-col md:flex-row justify-center items-center gap-8 py-12 space-y-6 rounded-2xl relative p-12">
        
        <div className="space-y-3 -mb-8">
        <h2 className="text-3xl font-semibold text-gray-900">
          Download Organic App
        </h2>
        <p className="text-gray-700">
          Online Orders made easy, fast, and reliable
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          {/* App Store Button */}
          <div
         
            className="bg-black gap-2 text-white flex items-center justify-center px-4 py-2 rounded-md shadow-lg"
          >
            <FaApple className="text-4xl" />
            <span>
              Download on the <br />
              <span className="font-bold">App Store</span>
            </span>
          </div>

          {/* Google Play Button */}
          <div
           
            className="bg-black gap-2 text-white flex items-center justify-center px-4 py-2 rounded-md shadow-lg"
          >
            <IoLogoGooglePlaystore className="text-4xl" />
            <span>
              Get it on <br /> <span className="font-bold">Google Play</span>
            </span>
          </div>
        </div>
        </div>

        {/* Image of Hand Holding Phone */}
        <div className="relative flex justify-center ">
          <img
            src={img}
            alt="Hand holding phone with app screen"
            className="md:h-80 object-cover -mb-12"
          />
        </div>

        
      </div>
    </div>
  );
};

export default Download;
