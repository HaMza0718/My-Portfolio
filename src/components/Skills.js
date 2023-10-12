import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import bootstrap from "../assets/bootstrap.png";
import tailwind from "../assets/tailwind.png";
import javaScript from "../assets/javascript.png";
import react from "../assets/react.png";
import next from "../assets/nextjs.png";
import github from "../assets/github.png";
import sql from "../assets/sql.png";

const Skills = () => {
  const skills = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-700",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-600",
    },
    {
      id: 3,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-600",
    },
    {
      id: 4,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-cyan-700",
    },
    {
      id: 5,
      src: javaScript,
      title: "Javascript",
      style: "shadow-yellow-600",
    },
    {
      id: 6,
      src: react,
      title: "React JS",
      style: "shadow-cyan-500",
    },
    {
      id: 7,
      src: next,
      title: "Next JS",
      style: "shadow-gray-300",
    },
    {
      id: 8,
      src: sql,
      title: "SQL",
      style: "shadow-blue-800",
    },
    {
      id: 9,
      src: github,
      title: "Github",
      style: "shadow-gray-500",
    },
  ];
  return (
    <div
      name="skills"
      className="w-full h-screen skills"
    >
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-3xl sm:text-4xl text-white font-bold inline border-b-4 border-gray-600">
            Skills
          </p>
          <p className="py-6 text-xl text-gray-400">
            I like to craft aesthetic user experience using modern frontend technologies.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {
            skills.map(({id, src, title, style})=>(
              <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
            <img src={src} alt="" className="w-20 mx-auto" />
            <p className="mt-4 text-white">{title}</p>
          </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Skills;
