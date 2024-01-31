import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { MdOutlineAddIcCall } from "react-icons/md";
import { LiaAddressBookSolid } from "react-icons/lia";
import whatsappLogo from "../assets/whatsappLogo.png";

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
    <div className="w-full footer">
      <div className="max-w-screen-xl p-4 sm:px-16 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-2">
          <p className="text-3xl sm:text-4xl text-white font-bold inline border-b-4 border-gray-600">
            Follow
          </p>
          <p className="mt-6 text-xl text-gray-400">
            Feel free to connect on social media.
          </p>
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
              <p className="py-2 text-xl text-gray-500 flex items-center hover:text-white duration-200">
                <MdOutlineAddIcCall size={25} />{" "}
                <a href="tel:+9234-72086321">+9234-72086321</a>
              </p>
              <p className="text-xl text-gray-500 flex items-center hover:text-white duration-200">
                <LiaAddressBookSolid size={25} />: Karachi, Pakistan
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 font-general-regular flex justify-center items-center text-center">
          <div className="text-lg text-gray-400">
            &copy; {new Date().getFullYear()}
            <a
              href="https://hamza-yasir-my-portfolio.vercel.app/"
              target="__blank"
              className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
            >
              React & Tailwind CSS Portfolio
            </a>
            <a
              href="https://github.com/HaMza0718"
              target="__blank"
              className="text-gray-400 font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
            >
              Hamza.
            </a>
          </div>
        </div>
      </div>
      <div className="whatsapp-logo hover:scale-95">
        <a href="https://wa.me/923472086321" target="_blank">
          <img src={whatsappLogo} width="50" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
