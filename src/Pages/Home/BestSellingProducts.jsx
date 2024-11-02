import { IoMdHeartEmpty } from "react-icons/io";

import product1 from "../../assets/images/product-thumb-1.png";

const BestSellingProducts = () => {
  return (
    <div className="container mx-auto my-24 px-4">

      <h1 className="font-poppins md:text-2xl lg:text-4xl font-bold">Best selling products</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
        <div class="group  hover:bg-base-100 hover:shadow-xl rounded-md text-center p-7 flex flex-col items-center relative h-[400px]">
          <img src={product1} alt="img1" class="pl-4" />
          <p>Whole Wheat Sandwich Bread</p>

          <div className="rating scale-75">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <p>$18.00</p>

          {/* <!-- Elements that appear only on hover --> */}
          <div class="absolute bottom-3 left-0 right-0 flex justify-around items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div>
              <input
                type="number"
                defaultValue="1"
                class="w-12 text-center border rounded-md px-1 py-2"
              />
            </div>
            <button class="bg-green-500 text-white px-4 py-2 rounded-md">
              Add to Cart
            </button>
            <button class="text-gray-500 p-2 rounded-md border">
              <IoMdHeartEmpty />
            </button>
          </div>
        </div>

        <div class="group h-[400px] hover:bg-base-100 hover:shadow-xl rounded-md text-center p-7 flex flex-col items-center relative">
          <img src={product1} alt="img1" class="pl-4" />
          <p>Whole Wheat Sandwich Bread</p>

          <div className="rating scale-75">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <p>$18.00</p>

          {/* <!-- Elements that appear only on hover --> */}
          <div class="absolute bottom-3 left-0 right-0 flex justify-around items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div>
              <input
                type="number"
                defaultValue="1"
                class="w-12 text-center border rounded-md px-1 py-2"
              />
            </div>
            <button class="bg-green-500 text-white px-4 py-2 rounded-md">
              Add to Cart
            </button>
            <button class="text-gray-500 p-2 rounded-md border">
              <IoMdHeartEmpty />
            </button>
          </div>
        </div>

        <div class="group h-[400px] hover:bg-base-100 hover:shadow-xl rounded-md text-center p-7 flex flex-col items-center relative">
          <img src={product1} alt="img1" class="pl-4" />
          <p>Whole Wheat Sandwich Bread</p>

          <div className="rating scale-75">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <p>$18.00</p>

          {/* <!-- Elements that appear only on hover --> */}
          <div class="absolute bottom-3 left-0 right-0 flex justify-around items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div>
              <input
                type="number"
                defaultValue="1"
                class="w-12 text-center border rounded-md px-1 py-2"
              />
            </div>
            <button class="bg-green-500 text-white px-4 py-2 rounded-md">
              Add to Cart
            </button>
            <button class="text-gray-500 p-2 rounded-md border">
              <IoMdHeartEmpty />
            </button>
          </div>
        </div>

        <div class="group h-[400px] hover:bg-base-100 hover:shadow-xl rounded-md text-center p-7 flex flex-col items-center relative">
          <img src={product1} alt="img1" class="pl-4" />
          <p>Whole Wheat Sandwich Bread</p>

          <div className="rating scale-75">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <p>$18.00</p>

          {/* <!-- Elements that appear only on hover --> */}
          <div class="absolute bottom-3 left-0 right-0 flex justify-around items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div>
              <input
                type="number"
                defaultValue="1"
                class="w-12 text-center border rounded-md px-1 py-2"
              />
            </div>
            <button class="bg-green-500 text-white px-4 py-2 rounded-md">
              Add to Cart
            </button>
            <button class="text-gray-500 p-2 rounded-md border">
              <IoMdHeartEmpty />
            </button>
          </div>
        </div>

        <div class="group h-[400px] hover:bg-base-100 hover:shadow-xl rounded-md text-center p-7 flex flex-col items-center relative">
          <img src={product1} alt="img1" class="pl-4" />
          <p>Whole Wheat Sandwich Bread</p>

          <div className="rating scale-75">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <p>$18.00</p>

          {/* <!-- Elements that appear only on hover --> */}
          <div class="absolute bottom-3 left-0 right-0 flex justify-around items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div>
              <input
                type="number"
                defaultValue="1"
                class="w-12 text-center border rounded-md px-1 py-2"
              />
            </div>
            <button class="bg-green-500 text-white px-4 py-2 rounded-md">
              Add to Cart
            </button>
            <button class="text-gray-500 p-2 rounded-md border">
              <IoMdHeartEmpty />
            </button>
          </div>
        </div>

        <div class="group h-[400px] hover:bg-base-100 hover:shadow-xl rounded-md text-center p-7 flex flex-col items-center relative">
          <img src={product1} alt="img1" class="pl-4" />
          <p>Whole Wheat Sandwich Bread</p>

          <div className="rating scale-75">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <p>$18.00</p>

          {/* <!-- Elements that appear only on hover --> */}
          <div class="absolute bottom-3 left-0 right-0 flex justify-around items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div>
              <input
                type="number"
                defaultValue="1"
                class="w-12 text-center border rounded-md px-1 py-2"
              />
            </div>
            <button class="bg-green-500 text-white px-4 py-2 rounded-md">
              Add to Cart
            </button>
            <button class="text-gray-500 p-2 rounded-md border">
              <IoMdHeartEmpty />
            </button>
          </div>
        </div>

        <div class="group h-[400px] hover:bg-base-100 hover:shadow-xl rounded-md text-center p-7 flex flex-col items-center relative">
          <img src={product1} alt="img1" class="pl-4" />
          <p>Whole Wheat Sandwich Bread</p>

          <div className="rating scale-75">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <p>$18.00</p>

          {/* <!-- Elements that appear only on hover --> */}
          <div class="absolute bottom-3 left-0 right-0 flex justify-around items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div>
              <input
                type="number"
                defaultValue="1"
                class="w-12 text-center border rounded-md px-1 py-2"
              />
            </div>
            <button class="bg-green-500 text-white px-4 py-2 rounded-md">
              Add to Cart
            </button>
            <button class="text-gray-500 p-2 rounded-md border">
              <IoMdHeartEmpty />
            </button>
          </div>
        </div>

        <div class="group h-[400px] hover:bg-base-100 hover:shadow-xl rounded-md text-center p-7 flex flex-col items-center relative">
          <img src={product1} alt="img1" class="pl-4" />
          <p>Whole Wheat Sandwich Bread</p>

          <div className="rating scale-75">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <p>$18.00</p>

          {/* <!-- Elements that appear only on hover --> */}
          <div class="absolute bottom-3 left-0 right-0 flex justify-around items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div>
              <input
                type="number"
                defaultValue="1"
                class="w-12 text-center border rounded-md px-1 py-2"
              />
            </div>
            <button class="bg-green-500 text-white px-4 py-2 rounded-md">
              Add to Cart
            </button>
            <button class="text-gray-500 p-2 rounded-md border">
              <IoMdHeartEmpty />
            </button>
          </div>
        </div>

        <div class="group h-[400px] hover:bg-base-100 hover:shadow-xl rounded-md text-center p-7 flex flex-col items-center relative">
          <img src={product1} alt="img1" class="pl-4" />
          <p>Whole Wheat Sandwich Bread</p>

          <div className="rating scale-75">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <p>$18.00</p>

          {/* <!-- Elements that appear only on hover --> */}
          <div class="absolute bottom-3 left-0 right-0 flex justify-around items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div>
              <input
                type="number"
                defaultValue="1"
                class="w-12 text-center border rounded-md px-1 py-2"
              />
            </div>
            <button class="bg-green-500 text-white px-4 py-2 rounded-md">
              Add to Cart
            </button>
            <button class="text-gray-500 p-2 rounded-md border">
              <IoMdHeartEmpty />
            </button>
          </div>
        </div>

        <div class="group h-[400px] hover:bg-base-100 hover:shadow-xl rounded-md text-center p-7 flex flex-col items-center relative">
          <img src={product1} alt="img1" class="pl-4" />
          <p>Whole Wheat Sandwich Bread</p>

          <div className="rating scale-75">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <p>$18.00</p>

          {/* <!-- Elements that appear only on hover --> */}
          <div class="absolute bottom-3 left-0 right-0 flex justify-around items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div>
              <input
                type="number"
                defaultValue="1"
                class="w-12 text-center border rounded-md px-1 py-2"
              />
            </div>
            <button class="bg-green-500 text-white px-4 py-2 rounded-md">
              Add to Cart
            </button>
            <button class="text-gray-500 p-2 rounded-md border">
              <IoMdHeartEmpty />
            </button>
          </div>
        </div>

        <div class="group h-[400px] hover:bg-base-100 hover:shadow-xl rounded-md text-center p-7 flex flex-col items-center relative">
          <img src={product1} alt="img1" class="pl-4" />
          <p>Whole Wheat Sandwich Bread</p>

          <div className="rating scale-75">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <p>$18.00</p>

          {/* <!-- Elements that appear only on hover --> */}
          <div class="absolute bottom-3 left-0 right-0 flex justify-around items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div>
              <input
                type="number"
                defaultValue="1"
                class="w-12 text-center border rounded-md px-1 py-2"
              />
            </div>
            <button class="bg-green-500 text-white px-4 py-2 rounded-md">
              Add to Cart
            </button>
            <button class="text-gray-500 p-2 rounded-md border">
              <IoMdHeartEmpty />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellingProducts;
