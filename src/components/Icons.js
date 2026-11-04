import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { PROFILE } from "../data/portfolioData";

const Icons = () => {
  const links = [
    {
      id: 1,
      label: "LinkedIn",
      icon: <FaLinkedin size={24} aria-hidden="true" />,
      href: PROFILE.linkedin,
    },
    {
      id: 2,
      label: "Mail",
      icon: <HiOutlineMail size={24} aria-hidden="true" />,
      href: `mailto:${PROFILE.email}`,
    },
    {
      id: 3,
      label: "Resume",
      icon: <BsFillPersonLinesFill size={24} aria-hidden="true" />,
      href: PROFILE.cvPath,
      download: "Hamza_Yasir_CV.pdf",
    },
  ];

  return (
    <aside className="fixed left-0 top-[35%] z-40 hidden lg:block" aria-label="Quick links">
      <ul>
        {links.map(({ id, label, icon, href, download }) => (
          <li
            key={id}
            className="ml-[-100px] flex h-14 w-40 items-center justify-between bg-slate-900/95 px-4 transition duration-300 hover:ml-0 hover:rounded-r-md"
          >
            <a
              href={href}
              download={download}
              className="flex w-full items-center justify-between text-sm text-white"
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {label}
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Icons;
