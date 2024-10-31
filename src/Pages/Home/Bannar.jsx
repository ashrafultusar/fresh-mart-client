import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaTruck } from "react-icons/fa";
import { FaRecycle } from "react-icons/fa6";
import bgPhoto from "../../assets/images/banner-1.jpg";



const Banner = () => {
  return (
    <div>
      <div></div>
      <div
        className="relative h-[720px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgPhoto})` }}
      >
        <div className="absolute inset-0 bg-opacity-50 "></div>
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-10 md:px-20">
          <h1 className="text-xl md:text-5xl lg:text-7xl font-poppins font-bold text-green-500 mb-3">
            <span className="text-[#6bb252]">Organic</span> <span className="text-black">Foods at your <br />Doorsteps</span>
          </h1>
          <p className="text-lg mb-5 opacity-80">Dignissim massa diam elementum.</p>
          <div className="flex space-x-4 mb-10">
            <button className="bg-[#6bb252] text-white font-semibold py-4 px-6 rounded-full hover:bg-orange-400 ">
              Start Shopping
            </button>
            <button className="bg-black text-white font-semibold py-2 px-5 rounded-full hover:shadow-2xl">
              Join Now
            </button>
          </div>
          <div className="flex space-x-10 mt-10">
            <div>
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold font-poppins">14k+</h2>
              <p className="text-sm md:text-xl">Product Varieties</p>
            </div>
            <div>
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold font-poppins">50k+</h2>
              <p className="text-sm md:text-xl">Happy Customers</p>
            </div>
            <div>
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold font-poppins">10+</h2>
              <p className="text-sm md:text-xl">Store Locations</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex justify-center text-white -mt-20">
        <div className="bg-[#6BB252] flex items-center px-6 py-12  shadow-lg">
          <FaRecycle className="text-4xl mr-4" />
          <div>
            <h2 className="font-semibold text-xl">Fresh from farm</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
          </div>
        </div>
        <div className="bg-[#364127] flex items-center px-6 py-12  shadow-lg">
          <AiOutlineCheckCircle className="text-4xl mr-4" />
          <div>
            <h2 className="font-semibold text-xl">100% Organic</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
          </div>
        </div>
        <div className="bg-[#F95F09] flex items-center px-6 py-12  shadow-lg">
          <FaTruck className="text-4xl mr-4" />
          <div>
            <h2 className="font-semibold text-xl">Free Delivery</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
