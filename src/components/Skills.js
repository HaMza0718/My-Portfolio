import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiGit,
  SiGithub,
  SiBitbucket,
} from "react-icons/si";
import {
  MdOutlineDashboardCustomize,
  MdOutlineIntegrationInstructions,
  MdOutlineStorage,
  MdOutlineFolderShared,
  MdOutlineAutoMode,
  MdOutlineApps,
} from "react-icons/md";
import { TbApi, TbBrandWindows } from "react-icons/tb";
import { HiOutlineDesktopComputer, HiOutlineServer } from "react-icons/hi";
import { VscAzure } from "react-icons/vsc";
import SectionHeading from "./SectionHeading";
import { SKILL_CATEGORIES } from "../data/portfolioData";
import { FADE_UP } from "../utils/scrollConfig";

const SKILL_ICONS = {
  "SharePoint Online": VscAzure,
  "SharePoint On-Premises": HiOutlineServer,
  "SharePoint Framework (SPFx)": MdOutlineDashboardCustomize,
  "SharePoint Lists": MdOutlineStorage,
  "Document Libraries": MdOutlineFolderShared,
  "SharePoint Designer": TbBrandWindows,
  "Power Apps": MdOutlineApps,
  "Power Automate": MdOutlineAutoMode,
  "React.js": SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "Next.js": SiNextdotjs,
  HTML5: SiHtml5,
  CSS3: SiCss3,
  "Tailwind CSS": SiTailwindcss,
  Bootstrap: SiBootstrap,
  "Responsive Web Design": HiOutlineDesktopComputer,
  "REST APIs": TbApi,
  "SAP Integration": MdOutlineIntegrationInstructions,
  SQL: SiMysql,
  Git: SiGit,
  GitHub: SiGithub,
  Bitbucket: SiBitbucket,
};

const Skills = () => (
  <section id="skills" name="skills" className="section-shell" aria-labelledby="skills-heading">
    <div className="section-inner">
      <SectionHeading
        title="Technical Skills"
        subtitle="Technologies and platforms used across SharePoint, frontend, integrations, and delivery."
      />
      <h3 id="skills-heading" className="sr-only">
        Skill categories
      </h3>

      <div className="grid gap-5 md:grid-cols-2">
        {SKILL_CATEGORIES.map((category, index) => (
          <motion.article
            key={category.id}
            {...FADE_UP}
            transition={{ ...FADE_UP.transition, delay: index * 0.05 }}
            className="card-surface p-5 sm:p-6"
          >
            <div className="mb-4 flex items-center gap-2">
              <MdOutlineIntegrationInstructions className="text-cyan-400" size={20} aria-hidden="true" />
              <h3 className="text-lg font-semibold text-white">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill) => {
                const Icon = SKILL_ICONS[skill];
                return (
                  <span key={skill} className="skill-chip">
                    {Icon ? <Icon className="mr-2 text-cyan-400" size={14} aria-hidden="true" /> : null}
                    {skill}
                  </span>
                );
              })}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
