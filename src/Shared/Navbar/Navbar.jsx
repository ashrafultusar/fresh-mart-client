import { GiChickenLeg } from "react-icons/gi";
import { IoFishOutline } from "react-icons/io5";
import { GiSlicedBread } from "react-icons/gi";
import { GiCannedFish } from "react-icons/gi";
import { RiFridgeLine } from "react-icons/ri";
import { BiSolidBowlRice } from "react-icons/bi";
import { MdFreeBreakfast } from "react-icons/md";
import { CiCoffeeCup } from "react-icons/ci";
import { SiBuymeacoffee } from "react-icons/si";
import { GiHotSpices } from "react-icons/gi";
import { LuBaby } from "react-icons/lu";
import { FaPersonShelter } from "react-icons/fa6";
import { LiaBreadSliceSolid } from "react-icons/lia";
import { FaHandHoldingWater } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { GiFruitBowl } from "react-icons/gi";
import { LuMilk } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';

import logo from "../../assets/images/logo(2).png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-wrap items-center justify-between px-6 py-4 bg-white shadow-md lg:flex-nowrap">
      {/* Sidebar Menu */}
      <div>
        <div
          className={`fixed top-0 left-0 h-full w-80 bg-white text-black transition-transform transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } z-50 overflow-y-auto`}
        >
          <button
            onClick={toggleSidebar}
            className=" absolute top-4 right-4 text-black "
          >
            <ImCross className="text-2xl" />
          </button>

          <div className="flex flex-col items-start p-6 space-y-4 mt-10">
            <div className="flex items-center gap-2">
              <GiFruitBowl />
              <a className="text-lg" href="#">
                Fruits and vegetables
              </a>
            </div>
            <div className="divider"></div>
            <div className="flex items-center gap-2">
              <LuMilk />
              <a className="text-lg" href="#">
                Dairy and Eggs
              </a>
            </div>
            <div className="divider"></div>
            <div className="flex items-center gap-2">
              <GiChickenLeg />
              <a className="text-lg" href="#">
                Meat and Poultry
              </a>
            </div>
            <div className="divider"></div>
            <div className="flex items-center gap-2">
              <IoFishOutline />
              <a className="text-lg" href="#">
                Seafood
              </a>
            </div>
            <div className="divider"></div>
            <div className="flex items-center gap-2">
              <GiSlicedBread />
              <a className="text-lg" href="#">
                Bakery and Bread
              </a>
            </div>
            <div className="divider"></div>
            <div className="flex items-center gap-2">
              <GiCannedFish />
              <a className="text-lg" href="#">
                Canned Goods
              </a>
            </div>
            <div className="divider"></div>
            <div className="flex items-center gap-2">
              <RiFridgeLine />
              <a className="text-lg" href="#">
                Frozen Foods
              </a>
            </div>
            <div className="divider"></div>
            <div className="flex items-center gap-2">
              <BiSolidBowlRice />
              <a className="text-lg" href="#">
                Pasta and Rice
              </a>
            </div>
            <div className="divider"></div>
            <div className="flex items-center gap-2">
              <MdFreeBreakfast />
              <a className="text-lg" href="#">
                Breakfast Foods
              </a>
            </div>
            <div className="divider"></div>
            <div className="flex items-center gap-2">
              <CiCoffeeCup />
              <a className="text-lg" href="#">
                Snacks and Chips
              </a>
            </div>
            <div className="divider"></div>
            <div className="flex items-center justify-center gap-2">
              <div className="collapse -ml-8  -space-y-3">
                <input type="checkbox" />
                <div className="collapse-title text-lg flex items-center gap-2">
                  <SiBuymeacoffee />
                  Beverages
                </div>
                <div className="collapse-content">
                  <p className="text-lg">Water</p>
                  <p className="text-lg">Juice</p>
                  <p className="text-lg">Soda</p>
                  <p className="text-lg">Tea</p>
                </div>
              </div>
            </div>
            <div className="divider"></div>
            <div className="flex items-center gap-2">
              <GiHotSpices />
              <a className="text-lg" href="#">
                Spices and Seasonings
              </a>
            </div>
            <div className="divider"></div>
            <div className="flex items-center gap-2">
              <LuBaby />
              <a className="text-lg" href="#">
                Baby Food and Formula
              </a>
            </div>
            <div className="divider"></div>
            <div className="flex items-center gap-2">
              <FaPersonShelter />
              <a className="text-lg" href="#">
                Health and Wellness
              </a>
            </div>
            <div className="divider"></div>
            <div className="flex items-center gap-2">
              <LiaBreadSliceSolid />
              <a className="text-lg" href="#">
                Household Supplies
              </a>
            </div>
            <div className="divider"></div>
            <div className="flex items-center gap-2">
              <FaHandHoldingWater />
              <a className="text-lg" href="#">
                Personal Care
              </a>
            </div>
            <div className="divider"></div>
            <div className="flex items-center gap-2">
              <MdOutlinePets />
              <a className="text-lg" href="#">
                Pet Food and Supplies
              </a>
            </div>

            <a className="btn btn-primary mt-4">Login</a>
          </div>
        </div>

        <div className="flex items-center space-x-8">
          {/* Toggle Button for Sidebar */}
          <button onClick={toggleSidebar} className="">
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          </button>

          {/* Logo */}
          <button className="flex items-center gap-1 text-xl">
            <img className="w-10" src={logo} alt="Logo" />
            <p className="font-poppins font-bold text-[#364127]">
              Food<span className="text-[#F95F09] ">Mart</span>
            </p>
          </button>
        </div>
      </div>

      {/* Filter and Search */}
      <div className="flex mt-4 md:mt-0 bg-gray-100 px-3 py-1 rounded-lg">
        <select
          id="productCategory"
          defaultValue=""
          className="bg-transparent focus:outline-none border px-3 py-1 rounded-l-lg text-gray-600"
        >
          <option value="">Chocolates</option>
          <option value="">Chocolates1</option>
          <option value="">Chocolates2</option>
          <option value="">Chocolates3</option>
        </select>

        <button className="bg-gray-100 px-2 py-1 rounded-r-lg">Reset</button>
      </div>

      {/* Search Bar */}
      <div className="mx- flex mt-4 lg:mt-0 lg:mx-4 w-full lg:w-auto">
        <div className="flex justify-center items-center gap-4 bg-gray-100 rounded-full px-4 py-2 w-full lg:w-auto">
          <input
            type="text"
            placeholder="Search for more than 20,000 products"
            className="flex-1 bg-transparent focus:outline-none px-2 text-gray-600"
          />

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.9 14.32a8 8 0 111.42-1.42l4.11 4.1a1 1 0 01-1.42 1.42l-4.1-4.1zM8 14A6 6 0 108 2a6 6 0 000 12z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="space-x-10 mt-4 ml-2 mr-2 lg:mt-0 ">
        <a href="/" className="font-medium text-gray-700">
          HOME
        </a>

        <details className="dropdown z-50">
          <summary className="font-medium text-gray-700 cursor-pointer ">
            PAGES
          </summary>
          <ul className="menu dropdown-content bg-base-100  w-48 p-2 shadow">
            <li>
              <a>ABOUT US</a>
            </li>
            <li>
              <a>SHOP</a>
            </li>
            <li>
              <a>SINGLE PRODUCT</a>
            </li>
            <li>
              <a>CART</a>
            </li>
            <li>
              <a>CHECKOUT</a>
            </li>
            <li>
              <a>BLOG</a>
            </li>
            <li>
              <a>SINGLE POST</a>
            </li>
            <li>
              <a>STYLES</a>
            </li>
            <li>
              <a>CONTACT</a>
            </li>
            <li>
              <a>MY ACCOUNT</a>
            </li>
          </ul>
        </details>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-6 ml-2 mt-4 lg:mt-0">
        
      <Link to="/login">
    <FaRegUserCircle className="text-2xl text-gray-600" />
  </Link>
        <CiBookmark className="text-2xl text-gray-600" />
        <FaShoppingCart className="text-2xl text-gray-600" />
      </div>
    </div>
  );
};

export default Navbar;
