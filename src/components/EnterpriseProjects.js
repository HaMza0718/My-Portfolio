import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { ENTERPRISE_PROJECTS } from "../data/portfolioData";
import { FADE_UP } from "../utils/scrollConfig";

const ProjectVisual = ({ title, accent, large = false }) => (
  <div
    className={`project-placeholder relative overflow-hidden rounded-xl border border-slate-700/50 ${
      large ? "min-h-[220px] sm:min-h-[280px]" : "min-h-[160px]"
    } bg-gradient-to-br ${accent}`}
    role="img"
    aria-label={`${title} project visual placeholder`}
  >
    <div className="absolute inset-0 flex flex-col justify-end p-5">
      <p className="text-xs uppercase tracking-[0.18em] text-cyan-300/80">Enterprise Solution</p>
      <p className="mt-1 max-w-md text-lg font-semibold text-white sm:text-xl">{title}</p>
    </div>
    <div
      className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full border border-cyan-400/20"
      aria-hidden="true"
    />
    <div
      className="pointer-events-none absolute bottom-8 right-8 h-16 w-16 rounded-lg border border-blue-400/20"
      aria-hidden="true"
    />
  </div>
);

const TechBadges = ({ technologies }) => (
  <div className="mt-3 flex flex-wrap gap-2">
    {technologies.map((tech) => (
      <span
        key={tech}
        className="rounded-md border border-slate-700 bg-slate-800/60 px-2.5 py-1 text-xs text-slate-300"
      >
        {tech}
      </span>
    ))}
  </div>
);

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`project-modal-${project.id}`}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.25 }}
        className="card-surface max-h-[90vh] w-full max-w-3xl overflow-y-auto p-5 sm:p-7"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h3 id={`project-modal-${project.id}`} className="text-2xl font-semibold text-white">
              {project.title}
            </h3>
            {project.client ? (
              <p className="mt-1 text-sm text-cyan-400">Client: {project.client}</p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"
            aria-label="Close project details"
          >
            <FiX size={20} />
          </button>
        </div>

        <ProjectVisual title={project.title} accent={project.accent} />
        <p className="mt-5 leading-relaxed text-slate-300">{project.description}</p>
        <TechBadges technologies={project.technologies} />

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-cyan-400">
              Key Features
            </h4>
            <ul className="space-y-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-2 text-sm text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {project.contribution.length > 0 ? (
            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-cyan-400">
                My Contribution
              </h4>
              <ul className="space-y-2">
                {project.contribution.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        <p className="mt-6 text-xs text-slate-500">
          Private enterprise solution — public demo link is not available.
        </p>
      </motion.div>
    </div>
  );
};

const EnterpriseProjects = () => {
  const [selected, setSelected] = useState(null);
  const featured = ENTERPRISE_PROJECTS.find((project) => project.featured);
  const others = ENTERPRISE_PROJECTS.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      name="projects"
      className="section-shell"
      aria-labelledby="enterprise-projects-heading"
    >
      <div className="section-inner">
        <SectionHeading
          title="Featured Enterprise Projects"
          subtitle="Selected SharePoint, SPFx, and Power Platform solutions delivered for enterprise clients."
        />
        <h3 id="enterprise-projects-heading" className="sr-only">
          Featured enterprise work
        </h3>

        {featured ? (
          <motion.article
            {...FADE_UP}
            className="card-surface mb-6 overflow-hidden p-5 sm:p-7"
          >
            <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
              <ProjectVisual title={featured.title} accent={featured.accent} large />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
                  Primary Featured Project
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                  {featured.title}
                </h3>
                {featured.client ? (
                  <p className="mt-2 text-sm text-slate-400">Client: {featured.client}</p>
                ) : null}
                <p className="mt-4 leading-relaxed text-slate-300">{featured.description}</p>
                <TechBadges technologies={featured.technologies} />
                <button
                  type="button"
                  onClick={() => setSelected(featured)}
                  className="btn-standard mt-6"
                >
                  View Project Details
                </button>
              </div>
            </div>
          </motion.article>
        ) : null}

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {others.map((project, index) => (
            <motion.article
              key={project.id}
              {...FADE_UP}
              transition={{ ...FADE_UP.transition, delay: index * 0.05 }}
              className="card-surface flex h-full flex-col overflow-hidden p-4 sm:p-5"
            >
              <ProjectVisual title={project.title} accent={project.accent} />
              <h3 className="mt-4 text-lg font-semibold text-white">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>
              <TechBadges technologies={project.technologies} />
              <button
                type="button"
                onClick={() => setSelected(project)}
                className="btn-standard mt-5 w-full"
              >
                View Details
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected ? (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        ) : null}
      </AnimatePresence>
    </section>
  );
};

export default EnterpriseProjects;
