// rafce
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
// import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";


<Link to="/starttriangle">StarTriangle</Link>


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hdlToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-zinc-200 ">
      <nav className="flex items-center justify-between px-12 h-32 lg:gap-11">

        <div className={`absolute left-0 ${isOpen ? "top-20 " : "-top-full " } bg-zinc-200 w-full flex flex-col items-center gap-6  font-bold text-lg lg:static lg:flex-row lg:justify-center `}>
          <ul className="flex flex-col items-center gap-14 lg:flex-row ">
            <li className="text-gray-800 hover:scale-110 hover:-translate-y-1 duration-200 cursor-pointer">
            <Link to="/StarTriangle">
                StarTriangle
                <img src="src/images/star.png" alt="Star Triangle" className="w-8 h-8 ml-8" />
                </Link>
            </li>
            <li className="text-gray-800 hover:scale-110 hover:-translate-y-1 duration-200 cursor-pointer">
            <Link to="/PokemonDex">
                PokemonAPI
                <img src="src/images/pokeball.png" alt="Pokemon API" className="w-8 h-8 ml-9" />
                </Link>
            </li>
            <li className="text-gray-800 hover:scale-110 hover:-translate-y-1 duration-200 cursor-pointer">
            <Link to="/Resume">
                MyResume
                <img src="src/images/resume.png" alt="My Resume" className="w-8 h-8 ml-8" />
                </Link>
            </li>
          </ul>
        </div>

        <div className="lg:hidden hover:scale-110 hover:-translate-y-1 duration-200">
          <FaBars onClick={hdlToggle} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
