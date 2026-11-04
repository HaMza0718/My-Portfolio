import React from "react";
import { motion } from "framer-motion";
import { HiOutlineAcademicCap, HiOutlineBadgeCheck } from "react-icons/hi";
import SectionHeading from "./SectionHeading";
import { ABOUT } from "../data/portfolioData";
import { FADE_UP } from "../utils/scrollConfig";

const About = () => (
  <section id="about" name="about" className="section-shell" aria-labelledby="about-heading">
    <div className="section-inner">
      <SectionHeading
        title="About Me"
        subtitle="SharePoint and frontend development focused on enterprise portals, automation, and integrations."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <motion.article
          {...FADE_UP}
          className="card-surface p-6 lg:col-span-2"
        >
          <h3 id="about-heading" className="mb-4 text-xl font-semibold text-white">
            Professional Overview
          </h3>
          <ul className="space-y-3">
            {ABOUT.overview.map((item) => (
              <li key={item} className="flex gap-3 text-slate-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" aria-hidden="true" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.article>

        <motion.article
          {...FADE_UP}
          transition={{ ...FADE_UP.transition, delay: 0.1 }}
          className="card-surface p-6"
        >
          <div className="mb-4 flex items-center gap-2 text-white">
            <HiOutlineBadgeCheck className="text-cyan-400" size={22} aria-hidden="true" />
            <h3 className="text-xl font-semibold">Areas of Expertise</h3>
          </div>
          <ul className="space-y-2.5">
            {ABOUT.expertise.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-slate-700/70 bg-slate-800/40 px-3 py-2 text-sm text-slate-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.article>

        <motion.article
          {...FADE_UP}
          transition={{ ...FADE_UP.transition, delay: 0.15 }}
          className="card-surface p-6 lg:col-span-3"
        >
          <div className="mb-3 flex items-center gap-2 text-white">
            <HiOutlineAcademicCap className="text-cyan-400" size={22} aria-hidden="true" />
            <h3 className="text-xl font-semibold">Education</h3>
          </div>
          <p className="text-lg font-medium text-slate-100">{ABOUT.education.degree}</p>
          <p className="mt-1 text-slate-300">{ABOUT.education.institution}</p>
          <p className="mt-1 text-sm text-slate-400">{ABOUT.education.period}</p>
        </motion.article>
      </div>
    </div>
  </section>
);

export default About;
