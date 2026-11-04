import React from "react";
import ScrollReveal from "./ScrollReveal";

const SectionHeading = ({ title, subtitle }) => (
  <ScrollReveal className="mb-8 md:mb-10">
    <h2 className="inline-block border-b-2 border-cyan-500/70 pb-2 text-3xl font-bold text-white sm:text-4xl">
      {title}
    </h2>
    {subtitle ? (
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-400 sm:text-lg">
        {subtitle}
      </p>
    ) : null}
  </ScrollReveal>
);

export default SectionHeading;
