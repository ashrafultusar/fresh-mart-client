import { CiLocationOn } from "react-icons/ci";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { VscPassFilled } from "react-icons/vsc";
import { MdOutlineLocalOffer } from "react-icons/md";

const HomeFetured = () => {
  return (
    <div className="container mx-auto my-24">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 p-4">
        <div class="border border-black space-y-2 p-5 text-start rounded-md shadow-sm">
          <div class="text-3xl mb-2">🚚</div>
          <h3 class="font-bold text-lg">Free delivery</h3>
          <p class="text-gray-600 w-64">
            Lorem ipsum dolor sit amet, consectetur adipi elit.
          </p>
        </div>
        <div class="border border-black space-y-2 p-5 text-start rounded-md shadow-sm">
          <div class="text-3xl mb-2">🔒</div>
          <h3 class="font-bold text-lg">100% secure payment</h3>
          <p class="text-gray-600 w-64">
            Lorem ipsum dolor sit amet, consectetur adipi elit.
          </p>
        </div>
        <div class="border border-black space-y-2 p-5 text-start rounded-md shadow-sm">
          <div class="text-3xl mb-2">
            <VscPassFilled />
          </div>
          <h3 class="font-bold text-lg">Quality guarantee</h3>
          <p class="text-gray-600 w-64">
            Lorem ipsum dolor sit amet, consectetur adipi elit.
          </p>
        </div>
        <div class="border border-black space-y-2 p-5 text-start rounded-md shadow-sm">
          <div class="text-3xl mb-2">💸</div>
          <h3 class="font-bold text-lg">Guaranteed savings</h3>
          <p class="text-gray-600 w-64">
            Lorem ipsum dolor sit amet, consectetur adipi elit.
          </p>
        </div>
        <div class="border border-black space-y-2 p-5 text-start rounded-md shadow-sm">
          <div class="text-3xl mb-2">🎁</div>
          <h3 class="font-bold text-lg">Daily offers</h3>
          <p class="text-gray-600 w-64">
            Lorem ipsum dolor sit amet, consectetur adipi elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeFetured;
