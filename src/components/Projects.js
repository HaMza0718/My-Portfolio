import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { PERSONAL_PROJECTS } from "../data/portfolioData";
import { FADE_UP } from "../utils/scrollConfig";

const Projects = () => (
  <section
    id="personal-projects"
    name="personal-projects"
    className="section-shell"
    aria-labelledby="personal-projects-heading"
  >
    <div className="section-inner">
      <SectionHeading
        title="Personal & Frontend Projects"
        subtitle="Selected personal frontend builds with live demos and source code."
      />
      <h3 id="personal-projects-heading" className="sr-only">
        Personal frontend projects
      </h3>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PERSONAL_PROJECTS.map(({ id, src, demo }, index) => (
          <motion.article
            key={id}
            {...FADE_UP}
            transition={{ ...FADE_UP.transition, delay: index * 0.04 }}
            className="card-surface overflow-hidden"
          >
            <img
              src={src}
              alt={`Personal frontend project preview ${id}`}
              loading="lazy"
              className="h-44 w-full object-cover object-top transition duration-300 hover:scale-[1.02] sm:h-48"
            />
            <div className="flex gap-3 p-4">
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-standard flex-1"
              >
                Live Demo
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
