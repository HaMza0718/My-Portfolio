import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { LiaAddressBookSolid } from "react-icons/lia";

const Footer = () => {
  const Links = [
    {
      id: 1,
      icon: <FiGithub />,
      href: "https://github.com/HaMza0718",
    },
    {
      id: 2,
      icon: <FiLinkedin />,
      href: "https://www.linkedin.com/in/hamza-yasir-64885a230/",
    },
    {
      id: 3,
      icon: <AiOutlineInstagram />,
      href: "https://www.instagram.com/_.sheikh_hamza._/",
    },
    {
      id: 4,
      icon: <AiOutlineMail />,
      href: "mailto:hamzayasir677@gmail.com",
    },
  ];
  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-800 to-black">
      <div className="max-w-screen-xl p-4 sm:px-16 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-2">
          <p className="text-3xl sm:text-4xl text-white font-bold inline border-b-4 border-gray-600">
            Follow
          </p>
		  <p className="mt-6 text-xl text-gray-500">Feel free to connect on social media.</p>
		  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="font-general-regular flex flex-col justify-center items-center">
            <ul className="pt-8 flex gap-4 sm:gap-8">
              {Links.map(({ id, href, icon }) => (
                <a
                  href={href}
                  target="__blank"
                  key={id}
                  className="hover:scale-105 duration-300 text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4"
                >
                  <i className="text-xl sm:text-2xl md:text-3xl">{icon}</i>
                </a>
              ))}
            </ul>
          </div>
            <div className="flex flex-col justify-center items-start mt-6 md:mt-0">
              <p className="text-2xl sm:text-3xl text-white font-signature cursor-context-menu">
                Hamza Yasir
              </p>
              <p className="py-2 text-xl text-gray-500 flex items-center">
                <BiPhoneCall size={25} />: +9234-72086321
              </p>
              <p className="text-xl text-gray-500 flex items-center">
                <LiaAddressBookSolid size={25} />: Karachi, Pakistan
              </p>
            </div>
			</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
