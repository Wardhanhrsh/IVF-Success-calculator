// import React, { useState } from "react";
// import { FaBars } from "react-icons/fa";

// function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
//   return (
//     <header className="header">
//       <div className="logo">
//         <div className="logo-box">
//           <span className="logo-line"></span>
//           <span className="logo-text">
//             i<span className="logo-dot"></span>VF
//           </span>
//         </div>
//         <span className="logo-name">Pulse</span>
//       </div>

//       <nav className={isOpen ? "nav-links active" : "nav-links"}>
//         <a href="/">Doner Programme</a>
//         <a href="/">Fertility Preservation</a>
//         <a href="/">Advanced Treatments</a>
//         <a href="/">Infertility Treatment</a>
//         <a href="/">IVF Testing</a>
//         <a href="/">About Us</a>
//         <button className="talk-button">Talk to us</button>
//       </nav>
//       <div className="icons" onClick={toggleMenu}>
//         <FaBars />
//       </div>
//     </header>
//   );
// }

// export default Header;
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 flex justify-between items-center px-20 py-2 bg-white text-gray-800 z-50 shadow-md">
      {/* Logo */}
      <div className="flex items-center font-bold text-xl">
        <div className="flex items-center bg-black text-white px-3 h-10 rounded relative">
          <span className="w-5 h-0.5 bg-orange-500 absolute left-1 -top-2"></span>
          <span className="flex items-center ml-4 text-lg font-bold relative">
            i<span className="w-1.5 h-1.5 bg-orange-500 rounded-full absolute -top-1 -left-1"></span>VF
          </span>
        </div>
        <span className="ml-3 text-black text-lg">Pulse</span>
      </div>

      {/* Navigation Links */}
      <nav
        className={`${
          isOpen ? "top-16" : "-top-[800px]"
        } transition-all duration-500 md:static md:flex md:flex-row flex-col md:items-center absolute right-0 w-[350px] h-[60vh] md:w-auto md:h-auto bg-white md:bg-transparent gap-4 px-5 py-5 md:py-0 z-40`}
      >
        <a href="/" className="text-black hover:text-orange-500">
          Doner Programme
        </a>
        <a href="/" className="text-black hover:text-orange-500">
          Fertility Preservation
        </a>
        <a href="/" className="text-black hover:text-orange-500">
          Advanced Treatments
        </a>
        <a href="/" className="text-black hover:text-orange-500">
          Infertility Treatment
        </a>
        <a href="/" className="text-black hover:text-orange-500">
          IVF Testing
        </a>
        <a href="/" className="text-black hover:text-orange-500">
          About Us
        </a>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-2 md:mt-0">
          Talk to us
        </button>
      </nav>

      {/* Hamburger Icon */}
      <div className="text-2xl md:hidden cursor-pointer" onClick={toggleMenu}>
        <FaBars />
      </div>
    </header>
  );
}

export default Header;
