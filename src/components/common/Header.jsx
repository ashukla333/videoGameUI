import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [backgroundText, setBackgroundText] = useState("VIDEO");
  const navigate = useNavigate();
  const handleNavigation = (text, path) => {
    setBackgroundText(text);
    navigate(path);
  };

  return (
    <div className="relative lg:h-24 md:h-20 h-auto">
      <div className="absolute lg:left-20 md:left-5 left-4 lg:top-10 md:top-12 top-8 transform -translate-y-1/2">
        <span className="lg:text-[3rem] md:text-[4rem] text-[3rem] font-montserrat font-bold text-white opacity-10 tracking-wide">
          {backgroundText}
        </span>
      </div>

      <nav className="relative flex lg:items-center items-start justify-between lg:top-8 md:top-6 md:left-5  top-3 lg:left-0 lg:px-28 md:px-10 px-5 py-6 lg:py-0 z-10">
        <div className="lg:text-2xl md:text-4xl text-2xl flex flex-col lg:flex-row font-bold font-montserrat space-y-4 lg:space-y-0 lg:space-x-8">
          <span
            onClick={() => handleNavigation("VIDEO", "/")}
            className="text-white cursor-pointer"
          >
            VIDEO GAMES
          </span>

          <span
            onClick={() => handleNavigation("CONTACT", "/contact")}
            className="text-white cursor-pointer"
          >
            CONTACT
          </span>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
