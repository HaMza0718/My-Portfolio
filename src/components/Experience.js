import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { EXPERIENCE } from "../data/portfolioData";
import { FADE_UP } from "../utils/scrollConfig";

const Experience = () => (
  <section
    id="experience"
    name="experience"
    className="section-shell"
    aria-labelledby="experience-heading"
  >
    <div className="section-inner">
      <SectionHeading
        title="Professional Experience"
        subtitle="Enterprise SharePoint, SPFx, Power Platform, and client-facing delivery."
      />
      <h3 id="experience-heading" className="sr-only">
        Career timeline
      </h3>

      <div className="relative">
        <div
          className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-cyan-500/60 via-slate-600 to-transparent md:left-1/2"
          aria-hidden="true"
        />

        <div className="space-y-8 md:space-y-12">
          {EXPERIENCE.map((job, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.article
                key={job.id}
                {...FADE_UP}
                transition={{ ...FADE_UP.transition, delay: index * 0.05 }}
                className="relative"
              >
                <div
                  className="absolute left-4 top-6 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-cyan-400 bg-navy-900 md:left-1/2"
                  aria-hidden="true"
                />

                <div className="grid md:grid-cols-2 md:gap-10">
                  {isLeft ? (
                    <>
                      <div className="ml-10 md:ml-0 md:pr-8">
                        <div className="card-surface p-5 text-left sm:p-6">
                          <p className="text-sm font-medium text-cyan-400">{job.period}</p>
                          <h3 className="mt-1 text-xl font-semibold text-white">{job.role}</h3>
                          <p className="mt-1 text-slate-300">{job.company}</p>
                          <ul className="mt-4 space-y-2">
                            {job.responsibilities.map((item) => (
                              <li
                                key={item}
                                className="flex gap-2 text-sm leading-relaxed text-slate-400"
                              >
                                <span
                                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-500"
                                  aria-hidden="true"
                                />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="hidden md:block" aria-hidden="true" />
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block" aria-hidden="true" />
                      <div className="ml-10 md:ml-0 md:pl-8">
                        <div className="card-surface p-5 text-left sm:p-6">
                          <p className="text-sm font-medium text-cyan-400">{job.period}</p>
                          <h3 className="mt-1 text-xl font-semibold text-white">{job.role}</h3>
                          <p className="mt-1 text-slate-300">{job.company}</p>
                          <ul className="mt-4 space-y-2">
                            {job.responsibilities.map((item) => (
                              <li
                                key={item}
                                className="flex gap-2 text-sm leading-relaxed text-slate-400"
                              >
                                <span
                                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-500"
                                  aria-hidden="true"
                                />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
