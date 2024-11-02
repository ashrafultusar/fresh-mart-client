import { Link } from "react-router-dom";
import img1 from "../../assets/images/post-thumbnail-1.jpg";
import img2 from "../../assets/images/post-thumbnail-2.jpg";
import img3 from "../../assets/images/post-thumbnail-3.jpg";
import { CiFolderOn } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";


const RecentBlog = () => {
  return (
      <div className="container mx-auto my-24 px-4">
          
          <div className="flex justify-between mb-12 ">
              <h1 className="font-poppins md:text-2xl lg:text-4xl font-bold">Our Recent Blog</h1>
              <Link><button className="bg-[#6BB252] px-3 py-1 rounded-md text-white">View All</button></Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
        <div class="h-[450px] bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
          <img src={img1} alt="" className="w-full h-60 object-cover" />
          <div class="p-4">
            <div class="flex items-center text-gray-500 text-xs mb-2">
            <CiCalendarDate className="text-xl"/>
              <span>22 AUG 2021</span>
              <span class="mx-2"><CiFolderOn className="text-xl"/> </span>
              <span>TIPS & TRICKS</span>
            </div>
            <h2 class="text-lg font-semibold text-gray-800 mb-2">
              Top 10 casual look ideas to dress up your kids
            </h2>
            <p class="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet
              eleifend viverra enim tincidunt donec quam...
            </p>
          </div>
        </div>

        <div class="h-[450px] bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
          <img src={img2} alt="" className="w-full h-60 object-cover" />
          <div class="p-4">
            <div class="flex items-center text-gray-500 text-xs mb-2">
            <CiCalendarDate className="text-xl"/>
              <span>22 AUG 2021</span>
              <span class="mx-2"> <CiFolderOn className="text-xl"/> </span>
              <span className="uppercase">trending</span>
            </div>
            <h2 class="text-lg font-semibold text-gray-800 mb-2">
            Latest trends of wearing street wears supremely
            </h2>
            <p class="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet
              eleifend viverra enim tincidunt donec quam...
            </p>
          </div>
        </div>

        <div class="h-[450px] bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
          <img src={img3} alt="" className="w-full h-60 object-cover" />
          <div class="p-4">
            <div class="flex items-center text-gray-500 text-xs mb-2">
            <CiCalendarDate className="text-xl"/>
              <span>22 AUG 2021</span>
              <span class="mx-2"><CiFolderOn className="text-xl"/> </span>
              <span className="uppercase">
inspiration</span>
            </div>
            <h2 class="text-lg font-semibold text-gray-800 mb-2">
            10 Different Types of comfortable clothes ideas for women
            </h2>
            <p class="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet
              eleifend viverra enim tincidunt donec quam...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBlog;
