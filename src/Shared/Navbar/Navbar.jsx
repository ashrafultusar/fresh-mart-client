// import { FaShoppingCart } from "react-icons/fa";
// import { CiBookmark } from "react-icons/ci";
// import { FaRegUserCircle } from "react-icons/fa";
// import React, { useState } from "react";
// import { ImCross } from "react-icons/im";

// import logo from "../../assets/images/logo(2).png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="flex items-center justify-between px-6 py-4 bg-white shadow-md">

//       {/* Sidebar Menu */}
//       <div>
//         <div
//           className={`fixed top-0 left-0 h-full w-80 bg-white text-black transition-transform transform ${
//             isOpen ? "translate-x-0" : "-translate-x-full"
//           } z-50`}
//         >
//           <button
//             onClick={toggleSidebar}
//             className="btn btn-ghost absolute top-4 right-4 text-black"
//           >
//             <ImCross className="text-2xl" />
//           </button>

//           <div className="flex flex-col items-start p-6 space-y-4 mt-10">
//             <a className="text-lg font-semibold" href="#">
//               Home
//             </a>
//             <a className="text-lg" href="#">
//               Dashboard
//             </a>
//             <a className="text-lg" href="#">
//               Pricing
//             </a>
//             <a className="text-lg" href="#">
//               Contact
//             </a>
//             <a className="text-lg" href="#">
//               About
//             </a>
//             <a className="btn btn-primary mt-4">Login</a>
//           </div>
//         </div>
//         <div className="flex items-center space-x-8">
//           {/* Toggle Button for Sidebar */}
//           <button onClick={toggleSidebar} className="btn btn-ghost">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </button>

//           {/* Logo */}
//           <button className="flex items-center gap-1 text-xl">
//             <img className="w-10" src={logo} alt="Logo" />
//             Organic
//           </button>
//         </div>
//       </div>

//       {/* filter and search */}
//       <div className="flex">
//         <select
//           id="productCategory"
//           defaultValue=""
//           className="bg-transparent focus:outline-none border px-3 py-1 rounded-l-lg text-gray-600"
//         >
//           <option value="">Chocolates</option>
//           <option value="">Chocolates1</option>
//           <option value="">Chocolates2</option>
//           <option value="">Chocolates3</option>
//         </select>

//         <button className="bg-gray-100 px-2 py-1 rounded-r-lg">Resat</button>
//       </div>
//       <div className="mx-8">
//         <div className="flex justify-center items-center gap-4 bg-gray-100 rounded-full px-4 py-2">
//           <input
//             type="text"
//             placeholder="Search for more than 20,000 products"
//             className="flex-1 lg:w-72 bg-transparent focus:outline-none px-2 text-gray-600"
//           />

//           <button>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 text-gray-600"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M12.9 14.32a8 8 0 111.42-1.42l4.11 4.1a1 1 0 01-1.42 1.42l-4.1-4.1zM8 14A6 6 0 108 2a6 6 0 000 12z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* home and page */}
//       <div className="space-x-10">
//         <a href="/" className="font-medium text-gray-700">
//           HOME
//         </a>

//         <details className="dropdown">
//           <summary className="font-medium text-gray-700 cursor-pointer">
//             PAGES
//           </summary>
//           <ul className="menu dropdown-content bg-base-100 rounded-box w-48 p-2 shadow">
//             <li>
//               <a>ABOUT US</a>
//             </li>
//             <li>
//               <a>SHOP</a>
//             </li>
//             <li>
//               <a>SINGLE PRODUCT</a>
//             </li>
//             <li>
//               <a>CART</a>
//             </li>
//             <li>
//               <a>CHECKOUT</a>
//             </li>
//             <li>
//               <a>BLOG</a>
//             </li>
//             <li>
//               <a>SINGLE POST</a>
//             </li>
//             <li>
//               <a>STYLES</a>
//             </li>
//             <li>
//               <a>CONTACT</a>
//             </li>
//             <li>
//               <a>MY ACCOUNT</a>
//             </li>
//           </ul>
//         </details>
//       </div>

//       {/* user save and cart icon */}
//       <div className="flex items-center space-x-6">
//         <FaRegUserCircle className="text-2xl text-gray-600" />
//         <CiBookmark className="text-2xl text-gray-600" />
//         <FaShoppingCart className="text-2xl text-gray-600" />
//       </div>


//     </div>
//   );
// };

// export default Navbar;

import { FaShoppingCart } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import React, { useState } from "react";
import { ImCross } from "react-icons/im";

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
          } z-50`}
        >
          <button
            onClick={toggleSidebar}
            className="btn btn-ghost absolute top-4 right-4 text-black"
          >
            <ImCross className="text-2xl" />
          </button>

          <div className="flex flex-col items-start p-6 space-y-4 mt-10">
            <a className="text-lg font-semibold" href="#">
              Home
            </a>
            <a className="text-lg" href="#">
              Dashboard
            </a>
            <a className="text-lg" href="#">
              Pricing
            </a>
            <a className="text-lg" href="#">
              Contact
            </a>
            <a className="text-lg" href="#">
              About
            </a>
            <a className="btn btn-primary mt-4">Login</a>
          </div>
        </div>
        <div className="flex items-center space-x-8">
          {/* Toggle Button for Sidebar */}
          <button onClick={toggleSidebar} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>

          {/* Logo */}
          <button className="flex items-center gap-1 text-xl">
            <img className="w-10" src={logo} alt="Logo" />
            Organic
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

        <details className="dropdown">
          <summary className="font-medium text-gray-700 cursor-pointer">
            PAGES
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box w-48 p-2 shadow">
            <li><a>ABOUT US</a></li>
            <li><a>SHOP</a></li>
            <li><a>SINGLE PRODUCT</a></li>
            <li><a>CART</a></li>
            <li><a>CHECKOUT</a></li>
            <li><a>BLOG</a></li>
            <li><a>SINGLE POST</a></li>
            <li><a>STYLES</a></li>
            <li><a>CONTACT</a></li>
            <li><a>MY ACCOUNT</a></li>
          </ul>
        </details>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-6 ml-2 mt-4 lg:mt-0">
        <FaRegUserCircle className="text-2xl text-gray-600" />
        <CiBookmark className="text-2xl text-gray-600" />
        <FaShoppingCart className="text-2xl text-gray-600" />
      </div>
    </div>
  );
};

export default Navbar;

