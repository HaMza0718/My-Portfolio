import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Icons = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/hamza-yasir-64885a230/",
    },
    {
      id: 2,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:hamzayasir677@gmail.com",
    },
    {
      id: 3,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "https://drive.google.com/file/d/1_NDsEJC_d59KWXULBlYxYBEWZDObZcDB/view?usp=sharing",
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed rounded-lg">
      <ul>
        {links.map(({ id, child, href }) => (
          <li
            key={id}
            className="flex justify-between items-center w-40 h-14 px-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 ml-[-100px] hover:ml-[2px] hover:rounded-md duration-300"
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
              <>{child}</>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Icons;
