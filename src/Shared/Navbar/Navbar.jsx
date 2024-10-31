// import logo from "../../assets/images/logo(2).png";
// const Navbar = () => {
//   return (
//     <div className="px-11">
//       <div className="navbar bg-base-100">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </div>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//             >
//               <li>
//                 <a>Item 1</a>
//               </li>
//               <li>
//                 <a>Parent</a>
//                 <ul className="p-2">
//                   <li>
//                     <a>Submenu </a>
//                   </li>
//                   <li>
//                     <a>Submenu 2</a>
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 <a>Item 3</a>
//               </li>
//             </ul>
//           </div>
//           <button className="flex items-center gap-1 text-xl">
//             <img className="w-10" src={logo} alt="" />
//             FreshMart
//           </button>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">
//             <li>
//               <a>Item 1</a>
//             </li>
//             <li>
//               <details>
//                 <summary>Parent</summary>
//                 <ul className="p-2">
//                   <li>
//                     <a>Submenu 1</a>
//                   </li>
//                   <li>
//                     <a>Submenu 2</a>
//                   </li>
//                 </ul>
//               </details>
//             </li>
//             <li>
//               <a>Item 3</a>
//             </li>
//           </ul>
//         </div>
//         <div className="navbar-end">
//           <a className="btn">Button</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import logo from "../../assets/images/logo(2).png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="px-11">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          {/* Toggle Button for Sidebar */}
          <button
            onClick={toggleSidebar}
            className="btn btn-ghost lg:hidden"
          >
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
            ChatVibe
          </button>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>Dashboard</a></li>
            <li><a>Pricing</a></li>
            <li><a>Contact</a></li>
            <li><a>About</a></li>
          </ul>
        </div>

        <div className="navbar-end">
          <a className="btn">Login</a>
        </div>
      </div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden z-50`}
      >
        <button
          onClick={toggleSidebar}
          className="btn btn-ghost absolute top-4 right-4 text-white"
        >
          X
        </button>

        <div className="flex flex-col items-start p-6 space-y-4 mt-10">
          <a className="text-lg font-semibold" href="#">Home</a>
          <a className="text-lg" href="#">Dashboard</a>
          <a className="text-lg" href="#">Pricing</a>
          <a className="text-lg" href="#">Contact</a>
          <a className="text-lg" href="#">About</a>
          <a className="btn btn-primary mt-4">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
