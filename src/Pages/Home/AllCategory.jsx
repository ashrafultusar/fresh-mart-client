import { FaArrowRight,FaArrowLeftLong } from "react-icons/fa6";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import img1 from "../../assets/images/category-thumb-1.jpg";
import img2 from "../../assets/images/category-thumb-2.jpg";
import img3 from "../../assets/images/category-thumb-3.jpg";
import img4 from "../../assets/images/category-thumb-4.jpg";
import img5 from "../../assets/images/category-thumb-5.jpg";
import img6 from "../../assets/images/category-thumb-6.jpg";
import img7 from "../../assets/images/category-thumb-7.jpg";

// Import Navigation and Pagination modules
import { Navigation, Pagination,Autoplay } from "swiper/modules";

const AllCategory = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null); 

  return (
    <div className="container mx-auto my-12 px-4">
      <div className=" flex justify-between items-center mb-16">
        <h2 className="text-lg md:text-3xl font-bold">Category</h2>
        <div className="flex items-center gap-2">
          <button ref={prevRef} className="bg-gray-200 py-3 px-5 rounded-md hover:bg-gray-300">
            
            <FaArrowLeftLong />
          </button>
          <button ref={nextRef} className="bg-gray-200 py-3 px-5 rounded-md hover:bg-gray-300">
          <FaArrowRight />
          </button>
          <button className="bg-[#6bb252] text-white hover:bg-orange-400  px-4 py-2 rounded">View All</button>
        </div>
      </div>
      
      <Swiper
        slidesPerView={8}
        spaceBetween={10}
        centeredSlides={false}
        grabCursor={true}
        pagination={{
          clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        modules={[Navigation, Pagination,Autoplay]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 8,
          },
        }}
      >
        {[img1, img2, img3, img4, img5, img6, img7,img7,img7,img7,img7,img7].map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 rounded-full overflow-hidden">
                <img src={image} alt={`Category ${index + 1}`} className="w-full h-full object-cover" />
              </div>
              <p className="mt-2 text-center">
                {index % 2 === 0 ? "Fruits & Veges" : "Breads & Sweets"}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AllCategory;
