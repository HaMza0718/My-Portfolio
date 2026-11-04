import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { MdOutlineAddIcCall } from "react-icons/md";
import { LiaAddressBookSolid } from "react-icons/lia";
import whatsappLogo from "../assets/whatsappLogo.png";
import { PROFILE } from "../data/portfolioData";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const Footer = () => {
  const Links = [
    {
      id: 1,
      icon: <FiGithub />,
      href: PROFILE.github,
      label: "GitHub",
    },
    {
      id: 2,
      icon: <FiLinkedin />,
      href: PROFILE.linkedin,
      label: "LinkedIn",
    },
    {
      id: 3,
      icon: <AiOutlineInstagram />,
      href: "https://www.instagram.com/_.sheikh_hamza._/",
      label: "Instagram",
    },
    {
      id: 4,
      icon: <AiOutlineMail />,
      href: `mailto:${PROFILE.email}`,
      label: "Email",
    },
  ];

  return (
    <div className="footer w-full">
      <ScrollReveal className="mx-auto flex h-full w-full max-w-screen-xl flex-col justify-center p-4 sm:px-16">
        <div className="pb-2">
          <SectionHeading
            title="Follow"
            subtitle="Feel free to connect on social media."
          />
          <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
            <div className="font-general-regular flex flex-col items-center justify-center">
              <ul className="flex flex-wrap items-center gap-4 pt-8 sm:gap-8">
                {Links.map(({ id, href, icon, label }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={id}
                    aria-label={label}
                    className="cursor-pointer rounded-lg bg-gray-50 p-4 text-gray-400 shadow-sm duration-300 hover:scale-105 hover:bg-gray-100 hover:text-indigo-500 dark:bg-ternary-dark dark:hover:text-indigo-400"
                  >
                    <i className="text-xl sm:text-2xl md:text-3xl">{icon}</i>
                  </a>
                ))}
              </ul>
            </div>
            <div className="mt-6 flex flex-col items-start justify-center md:mt-0">
              <p className="cursor-context-menu font-signature text-2xl text-white sm:text-3xl">
                {PROFILE.name}
              </p>
              <p className="flex items-center gap-2 py-2 text-xl text-gray-500 duration-200 hover:text-white">
                <MdOutlineAddIcCall size={25} />
                <a href={PROFILE.phoneHref}>{PROFILE.phone}</a>
              </p>
              <p className="flex items-center gap-2 text-xl text-gray-500 duration-200 hover:text-white">
                <AiOutlineMail size={25} />
                <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
              </p>
              <p className="mt-2 flex items-center text-xl text-gray-500 duration-200 hover:text-white">
                <LiaAddressBookSolid size={25} />: {PROFILE.location}
              </p>
            </div>
          </div>
        </div>
        <div className="font-general-regular mt-5 flex items-center justify-center text-center">
          <div className="text-lg text-gray-400">
            &copy; {new Date().getFullYear()}
            <a
              href="https://hamza-yasir-my-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 duration-500 hover:text-indigo-600 hover:underline dark:hover:text-indigo-300"
            >
              React & Tailwind CSS Portfolio
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 font-medium uppercase text-gray-400 duration-500 hover:text-indigo-600 hover:underline dark:hover:text-indigo-300"
            >
              Hamza.
            </a>
          </div>
        </div>
      </ScrollReveal>
      <div className="whatsapp-logo hover:scale-95">
        <a
          href={PROFILE.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <img src={whatsappLogo} width="50" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
