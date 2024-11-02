// import { IoMdHeartEmpty } from "react-icons/io";
// import product1 from "../../assets/images/product-thumb-5.png";

// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// // import required modules
// import { Pagination } from "swiper/modules";

// const FeaturedProducts = () => {
//   return (
//     <div className="container mx-auto my-24">
//       <h1 className="font-poppins md:text-2xl lg:text-4xl font-bold">
//         Featured products
//       </h1>

//       <Swiper
//         slidesPerView={5}
//         spaceBetween={30}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <div class="group h-[400px] hover:bg-base-100 hover:shadow-xl rounded-md text-center p-7 flex flex-col items-center relative">
//             <img src={product1} alt="img1" class="pl-4" />
//             <p>Whole Wheat Sandwich Bread</p>

//             <div className="rating scale-75">
//               <input
//                 type="radio"
//                 name="rating-2"
//                 className="mask mask-star-2 bg-orange-400"
//               />
//               <input
//                 type="radio"
//                 name="rating-2"
//                 className="mask mask-star-2 bg-orange-400"
//                 defaultChecked
//               />
//               <input
//                 type="radio"
//                 name="rating-2"
//                 className="mask mask-star-2 bg-orange-400"
//               />
//               <input
//                 type="radio"
//                 name="rating-2"
//                 className="mask mask-star-2 bg-orange-400"
//               />
//               <input
//                 type="radio"
//                 name="rating-2"
//                 className="mask mask-star-2 bg-orange-400"
//               />
//             </div>
//             <p>$18.00</p>

//             {/* <!-- Elements that appear only on hover --> */}
//             <div class="absolute bottom-3 left-0 right-0 flex justify-around items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <div>
//                 <input
//                   type="number"
//                   defaultValue="1"
//                   class="w-12 text-center border rounded-md px-1 py-2"
//                 />
//               </div>
//               <button class="bg-green-500 text-white px-4 py-2 rounded-md">
//                 Add to Cart
//               </button>
//               <button class="text-gray-500 p-2 rounded-md border">
//                 <IoMdHeartEmpty />
//               </button>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div class="group h-[400px] hover:bg-base-100 hover:shadow-xl rounded-md text-center p-7 flex flex-col items-center relative">
//             <img src={product1} alt="img1" class="pl-4" />
//             <p>Whole Wheat Sandwich Bread</p>

//             <div className="rating scale-75">
//               <input
//                 type="radio"
//                 name="rating-2"
//                 className="mask mask-star-2 bg-orange-400"
//               />
//               <input
//                 type="radio"
//                 name="rating-2"
//                 className="mask mask-star-2 bg-orange-400"
//                 defaultChecked
//               />
//               <input
//                 type="radio"
//                 name="rating-2"
//                 className="mask mask-star-2 bg-orange-400"
//               />
//               <input
//                 type="radio"
//                 name="rating-2"
//                 className="mask mask-star-2 bg-orange-400"
//               />
//               <input
//                 type="radio"
//                 name="rating-2"
//                 className="mask mask-star-2 bg-orange-400"
//               />
//             </div>
//             <p>$18.00</p>

//             {/* <!-- Elements that appear only on hover --> */}
//             <div class="absolute bottom-3 left-0 right-0 flex justify-around items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <div>
//                 <input
//                   type="number"
//                   defaultValue="1"
//                   class="w-12 text-center border rounded-md px-1 py-2"
//                 />
//               </div>
//               <button class="bg-green-500 text-white px-4 py-2 rounded-md">
//                 Add to Cart
//               </button>
//               <button class="text-gray-500 p-2 rounded-md border">
//                 <IoMdHeartEmpty />
//               </button>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div class="group h-[400px] hover:bg-base-100 hover:shadow-xl rounded-md text-center p-7 flex flex-col items-center relative">
//             <img src={product1} alt="img1" class="pl-4" />
//             <p>Whole Wheat Sandwich Bread</p>

//             <div className="rating scale-75">
//               <input
//                 type="radio"
//                 name="rating-2"
//                 className="mask mask-star-2 bg-orange-400"
//               />
//               <input
//                 type="radio"
//                 name="rating-2"
//                 className="mask mask-star-2 bg-orange-400"
//                 defaultChecked
//               />
//               <input
//                 type="radio"
//                 name="rating-2"
//                 className="mask mask-star-2 bg-orange-400"
//               />
//               <input
//                 type="radio"
//                 name="rating-2"
//                 className="mask mask-star-2 bg-orange-400"
//               />
//               <input
//                 type="radio"
//                 name="rating-2"
//                 className="mask mask-star-2 bg-orange-400"
//               />
//             </div>
//             <p>$18.00</p>

//             {/* <!-- Elements that appear only on hover --> */}
//             <div class="absolute bottom-3 left-0 right-0 flex justify-around items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <div>
//                 <input
//                   type="number"
//                   defaultValue="1"
//                   class="w-12 text-center border rounded-md px-1 py-2"
//                 />
//               </div>
//               <button class="bg-green-500 text-white px-4 py-2 rounded-md">
//                 Add to Cart
//               </button>
//               <button class="text-gray-500 p-2 rounded-md border">
//                 <IoMdHeartEmpty />
//               </button>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div class="group h-[400px] hover:bg-base-100 hover:shadow-xl rounded-md text-center p-7 flex flex-col items-center relative">
//             <img src={product1} alt="img1" class="pl-4" />
//             <p>Whole Wheat Sandwich Bread</p>

//             <div className="rating scale-75">
//               <input
//                 type="radio"
//                 name="rating-2"
//                 className="mask mask-star-2 bg-orange-400"
//               />
//               <input
//                 type="radio"
//                 name="rating-2"
//                 className="mask mask-star-2 bg-orange-400"
//                 defaultChecked
//               />
//               <input
//                 type="radio"
//                 name="rating-2"
//                 className="mask mask-star-2 bg-orange-400"
//               />
//               <input
//                 type="radio"
//                 name="rating-2"
//                 className="mask mask-star-2 bg-orange-400"
//               />
//               <input
//                 type="radio"
//                 name="rating-2"
//                 className="mask mask-star-2 bg-orange-400"
//               />
//             </div>
//             <p>$18.00</p>

//             {/* <!-- Elements that appear only on hover --> */}
//             <div class="absolute bottom-3 left-0 right-0 flex justify-around items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <div>
//                 <input
//                   type="number"
//                   defaultValue="1"
//                   class="w-12 text-center border rounded-md px-1 py-2"
//                 />
//               </div>
//               <button class="bg-green-500 text-white px-4 py-2 rounded-md">
//                 Add to Cart
//               </button>
//               <button class="text-gray-500 p-2 rounded-md border">
//                 <IoMdHeartEmpty />
//               </button>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div class="group h-[400px] hover:bg-base-100 hover:shadow-xl rounded-md text-center p-7 flex flex-col items-center relative">
//             <img src={product1} alt="img1" class="pl-4" />
//             <p>Whole Wheat Sandwich Bread</p>

//             <div className="rating scale-75">
//               <input
//                 type="radio"
//                 name="rating-2"
//                 className="mask mask-star-2 bg-orange-400"
//               />
//               <input
//                 type="radio"
//                 name="rating-2"
//                 className="mask mask-star-2 bg-orange-400"
//                 defaultChecked
//               />
//               <input
//                 type="radio"
//                 name="rating-2"
//                 className="mask mask-star-2 bg-orange-400"
//               />
//               <input
//                 type="radio"
//                 name="rating-2"
//                 className="mask mask-star-2 bg-orange-400"
//               />
//               <input
//                 type="radio"
//                 name="rating-2"
//                 className="mask mask-star-2 bg-orange-400"
//               />
//             </div>
//             <p>$18.00</p>

//             {/* <!-- Elements that appear only on hover --> */}
//             <div class="absolute bottom-3 left-0 right-0 flex justify-around items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <div>
//                 <input
//                   type="number"
//                   defaultValue="1"
//                   class="w-12 text-center border rounded-md px-1 py-2"
//                 />
//               </div>
//               <button class="bg-green-500 text-white px-4 py-2 rounded-md">
//                 Add to Cart
//               </button>
//               <button class="text-gray-500 p-2 rounded-md border">
//                 <IoMdHeartEmpty />
//               </button>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div class="group h-[400px] hover:bg-base-100 hover:shadow-xl rounded-md text-center p-7 flex flex-col items-center relative">
//             <img src={product1} alt="img1" class="pl-4" />
//             <p>Whole Wheat Sandwich Bread</p>

//             <div className="rating scale-75">
//               <input
//                 type="radio"
//                 name="rating-2"
//                 className="mask mask-star-2 bg-orange-400"
//               />
//               <input
//                 type="radio"
//                 name="rating-2"
//                 className="mask mask-star-2 bg-orange-400"
//                 defaultChecked
//               />
//               <input
//                 type="radio"
//                 name="rating-2"
//                 className="mask mask-star-2 bg-orange-400"
//               />
//               <input
//                 type="radio"
//                 name="rating-2"
//                 className="mask mask-star-2 bg-orange-400"
//               />
//               <input
//                 type="radio"
//                 name="rating-2"
//                 className="mask mask-star-2 bg-orange-400"
//               />
//             </div>
//             <p>$18.00</p>

//             {/* <!-- Elements that appear only on hover --> */}
//             <div class="absolute bottom-3 left-0 right-0 flex justify-around items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <div>
//                 <input
//                   type="number"
//                   defaultValue="1"
//                   class="w-12 text-center border rounded-md px-1 py-2"
//                 />
//               </div>
//               <button class="bg-green-500 text-white px-4 py-2 rounded-md">
//                 Add to Cart
//               </button>
//               <button class="text-gray-500 p-2 rounded-md border">
//                 <IoMdHeartEmpty />
//               </button>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div class="group h-[400px] hover:bg-base-100 hover:shadow-xl rounded-md text-center p-7 flex flex-col items-center relative">
//             <img src={product1} alt="img1" class="pl-4" />
//             <p>Whole Wheat Sandwich Bread</p>

//             <div className="rating scale-75">
//               <input
//                 type="radio"
//                 name="rating-2"
//                 className="mask mask-star-2 bg-orange-400"
//               />
//               <input
//                 type="radio"
//                 name="rating-2"
//                 className="mask mask-star-2 bg-orange-400"
//                 defaultChecked
//               />
//               <input
//                 type="radio"
//                 name="rating-2"
//                 className="mask mask-star-2 bg-orange-400"
//               />
//               <input
//                 type="radio"
//                 name="rating-2"
//                 className="mask mask-star-2 bg-orange-400"
//               />
//               <input
//                 type="radio"
//                 name="rating-2"
//                 className="mask mask-star-2 bg-orange-400"
//               />
//             </div>
//             <p>$18.00</p>

//             {/* <!-- Elements that appear only on hover --> */}
//             <div class="absolute bottom-3 left-0 right-0 flex justify-around items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <div>
//                 <input
//                   type="number"
//                   defaultValue="1"
//                   class="w-12 text-center border rounded-md px-1 py-2"
//                 />
//               </div>
//               <button class="bg-green-500 text-white px-4 py-2 rounded-md">
//                 Add to Cart
//               </button>
//               <button class="text-gray-500 p-2 rounded-md border">
//                 <IoMdHeartEmpty />
//               </button>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default FeaturedProducts;

import { IoMdHeartEmpty } from "react-icons/io";
import product1 from "../../assets/images/product-thumb-5.png";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const FeaturedProducts = () => {
  return (
    <div className="container mx-auto my-24 px-4">
      <h1 className="font-poppins md:text-2xl lg:text-4xl font-bold">
        Featured Products
      </h1>

      <Swiper
        slidesPerView={5} // Default value for large screens
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          // Change number of slides per view for different screen sizes
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

export default FeaturedProducts;
