import { IoMdHeartEmpty } from "react-icons/io";
import product1 from "../../assets/images/product-thumb-8.png";
import { FaArrowRight, FaArrowLeftLong } from "react-icons/fa6";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import for Navigation CSS
import { Navigation } from "swiper/modules"; // Import Navigation

const JustArrived = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-lg md:text-3xl font-bold">Just arrived
</h2>
          <div className="flex items-center gap-2">
            <button ref={prevRef} className="bg-gray-200 py-3 px-5 rounded-md hover:bg-gray-300">
              <FaArrowLeftLong />
            </button>
            <button ref={nextRef} className="bg-gray-200 py-3 px-5 rounded-md hover:bg-gray-300">
              <FaArrowRight />
            </button>
            <button className="bg-[#6bb252] text-white hover:bg-orange-400 px-4 py-2 rounded">
              View All
            </button>
          </div>
        </div>
  
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          modules={[ Navigation]} // Consolidated module array
          className="mySwiper relative overflow-hidden h-[450px]"
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {[...Array(8)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="group h-[400px] hover:bg-base-100 hover:shadow-xl rounded-md text-center p-7 flex flex-col items-center relative">
                <img src={product1} alt={`product-${index + 1}`} className="pl-4" />
                <p>Whole Wheat Sandwich Bread</p>
  
                <div className="rating scale-75">
                  {[...Array(5)].map((_, i) => (
                    <input
                      key={i}
                      type="radio"
                      name={`rating-${index}`}
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked={i === 1}
                    />
                  ))}
                </div>
                <p>$18.00</p>
  
                {/* Elements that appear only on hover */}
                <div className="absolute bottom-3 left-0 right-0 flex justify-around items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <input
                      type="number"
                      defaultValue="1"
                      className="w-12 text-center border rounded-md px-1 py-2"
                    />
                  </div>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                    Add to Cart
                  </button>
                  <button className="text-gray-500 p-2 rounded-md border">
                    <IoMdHeartEmpty />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
};

export default JustArrived;