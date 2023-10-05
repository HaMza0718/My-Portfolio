import React from "react";
import blogApp from "../assets/portfolio/blogApp.PNG";
import fashioNova from "../assets/portfolio/fashionNova.PNG";
import foodTime from "../assets/portfolio/foodTime.PNG";
import hulu from "../assets/portfolio/hulu.PNG";
import realState from "../assets/portfolio/realState.PNG";
import travelista from "../assets/portfolio/travelista.PNG";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: realState,
    },
    {
      id: 2,
      src: travelista,
    },
    {
      id: 3,
      src: foodTime,
    },
    {
      id: 4,
      src: hulu,
    },
    {
      id: 5,
      src: fashioNova,
    },
    {
      id: 6,
      src: blogApp,
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-3xl sm:text-4xl text-white font-bold inline border-b-4 border-gray-600">
            Projects
          </p>
          <p className="py-6 text-gray-400">Explore some of my work here.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-6">
          {projects.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button class="w-1/2 px-6 py-3 bg-black h-[50px] m-4 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#011231] before:to-[rgb(129,175,216)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
                  Demo
                </button>
                <button class="w-1/2 px-6 py-3 bg-black h-[50px] m-4 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#011231] before:to-[rgb(129,175,216)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;