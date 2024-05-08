"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-5 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md  bg-opacity-100">
      <div className="flex container lg:py-1 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
           <Image src="/images/SG1.png" width={200} height={70} />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200" id="navbar">
          <ul className="p-4 md:p-0 md:flex-row md:space-x-8 mt-0 flex">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;

// import { Socials } from "./constants";
// import Image from "next/image";
// import React from "react";

// const Navbar = () => {
//   return (
//     <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
//       <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
//         <a
//           href="#about-me"
//           className="h-auto w-auto flex flex-row items-center"
//         >
//           <Image
//             src="/images/SG1.png"
//             alt="logo"
//             width={170}
//             height={70}
//             className="cursor-pointer hover:animate-slowspin"
//           />

//         </a>

//         <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
//           <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
//             <a href="#about" className="cursor-pointer">
//               About me
//             </a>
//             <a href="#skills" className="cursor-pointer">
//               Skills
//             </a>
//             <a href="#projects" className="cursor-pointer">
//               Projects
//             </a>
//           </div>
//         </div>

//         {/* <div className="flex flex-row gap-5">
//           {Socials.map((social) => (
//             <Image
//               src={social.src}
//               alt={social.name}
//               key={social.name}
//               width={24}
//               height={24}
//             />
//           ))}
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
