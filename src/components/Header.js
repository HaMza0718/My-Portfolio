import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { NAV_LINKS } from "../data/portfolioData";
import { SCROLL_LINK_PROPS } from "../utils/scrollConfig";

const Header = () => {
  const [nav, setNav] = useState(false);

  const closeNav = () => setNav(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-800/80 bg-navy-900/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="home"
          {...SCROLL_LINK_PROPS}
          className="cursor-pointer font-signature text-3xl text-white transition hover:text-cyan-400"
          aria-label="Go to home"
        >
          H.Y
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV_LINKS.map(({ id, link, label }) => (
            <Link
              key={id}
              to={link}
              {...SCROLL_LINK_PROPS}
              className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium capitalize text-slate-300 transition hover:text-white"
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setNav((open) => !open)}
          className="rounded-md p-2 text-slate-300 transition hover:text-white md:hidden"
          aria-expanded={nav}
          aria-controls="mobile-nav"
          aria-label={nav ? "Close menu" : "Open menu"}
        >
          {nav ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {nav && (
        <nav
          id="mobile-nav"
          className="border-t border-slate-800 bg-navy-800 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col px-4 py-3">
            {NAV_LINKS.map(({ id, link, label }) => (
              <li key={id}>
                <Link
                  onClick={closeNav}
                  to={link}
                  {...SCROLL_LINK_PROPS}
                  className="block cursor-pointer rounded-md px-3 py-3 text-base capitalize text-slate-300 transition hover:bg-slate-800 hover:text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
