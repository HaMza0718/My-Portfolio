import React from "react";
import { motion } from "framer-motion";
import { HiOutlineBadgeCheck, HiOutlineExternalLink } from "react-icons/hi";
import SectionHeading from "./SectionHeading";
import { CERTIFICATIONS } from "../data/portfolioData";
import { FADE_UP } from "../utils/scrollConfig";

const Certifications = () => (
  <section
    id="certifications"
    name="certifications"
    className="section-shell"
    aria-labelledby="certifications-heading"
  >
    <div className="section-inner">
      <SectionHeading
        title="Certifications"
        subtitle="Professional learning focused on modern frontend and data fundamentals."
      />
      <h3 id="certifications-heading" className="sr-only">
        Certificates
      </h3>

      <div className="grid gap-4 sm:grid-cols-2">
        {CERTIFICATIONS.map((cert, index) => (
          <motion.article
            key={cert.id}
            {...FADE_UP}
            transition={{ ...FADE_UP.transition, delay: index * 0.05 }}
            className="card-surface flex items-start gap-3 p-5"
          >
            <HiOutlineBadgeCheck className="mt-0.5 shrink-0 text-cyan-400" size={22} aria-hidden="true" />
            <div className="min-w-0 flex-1">
              <h3 className="text-base font-medium leading-snug text-white">{cert.title}</h3>
              {cert.href ? (
                <a
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm text-cyan-400 transition hover:text-cyan-300"
                >
                  View certificate
                  <HiOutlineExternalLink size={14} aria-hidden="true" />
                </a>
              ) : (
                ''
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
