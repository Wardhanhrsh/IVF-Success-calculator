import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="header">
      <div className="logo">
        <div className="logo-box">
          <span className="logo-line"></span>
          <span className="logo-text">
            i<span className="logo-dot"></span>VF
          </span>
        </div>
        <span className="logo-name">Pulse</span>
      </div>

      <nav className={isOpen ? "nav-link active" : "nav-links"}>
        <a href="/">Doner Programme</a>
        <a href="/">Fertility Preservation</a>
        <a href="/">Advanced Treatments</a>
        <a href="/">Infertility Treatment</a>
        <a href="/">IVF Testing</a>
        <a href="/">About Us</a>
        <button className="talk-button">Talk to us</button>
      </nav>
      <div className="icons" onClick={toggleMenu}>
        <FaBars />
      </div>
    </header>
  );
}

export default Header;
