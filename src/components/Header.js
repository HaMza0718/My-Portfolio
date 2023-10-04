import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

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
      link: "projects",
    },
    {
      id: 4,
      link: "skills",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-16 px-4 text-white bg-gradient-to-b from-black to-gray-900 fixed">
      <div>
        <h1 className="text-2xl sm:text-3xl ml-2 font-signature cursor-context-menu hover:scale-75">
          Hamza
        </h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200">
            {link}
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
        <ul className="flex flex-col justify-center items-center absolute top-4 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-300">
          {links.map(({ id, link }) => (
            <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;
