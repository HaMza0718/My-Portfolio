import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Header = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "skills",
    },
    {
      id: 4,
      link: "projects",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-16 px-4 text-white bg-gradient-to-b from-black to-gray-900 fixed z-50">
      <div>
        <h1 className="text-3xl sm:text-3xl ml-2 font-signature cursor-context-menu hover:scale-75">
          H..Y
        </h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 hover:text-white duration-200">
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-1 z-10 text-gray-300 md:hidden"
      >
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-5 right-5 bg-gradient-to-t from-gray-800 to-black text-gray-300 rounded-xl">
          {links.map(({ id, link }) => (
            <li className="px-8 cursor-pointer capitalize py-4 text-3xl sm:text-4xl">
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div> 
  );
};

export default Header;
