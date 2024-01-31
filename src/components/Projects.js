import React from "react";
import blogApp from "../assets/portfolio/blogApp.PNG";
import fashioNova from "../assets/portfolio/fashionNova.PNG";
import foodTime from "../assets/portfolio/foodTime.PNG";
import hulu from "../assets/portfolio/hulu.PNG";
import realState from "../assets/portfolio/realState.PNG";
import snapLeather from "../assets/portfolio/snapLeather.PNG";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: realState,
      demo: "https://real-estate-react-web-app.vercel.app/",
      code: "https://github.com/HaMza0718/RealEstate-WebApp",
    },
    {
      id: 2,
      src: snapLeather,
      demo: "https://snapleather-leathercollection.netlify.app/",
      code: "https://github.com/HaMza0718/Leather_Collection",
    },
    {
      id: 3,
      src: foodTime,
      demo: "https://hamza0718.github.io/Food-Time/",
      code: "https://github.com/HaMza0718/Food-Time",
    },
    {
      id: 4,
      src: hulu,
      demo: "https://hulu-2-0-nextjs-beta.vercel.app/",
      code: "https://github.com/HaMza0718/Hulu_2.0",
    },
    {
      id: 5,
      src: fashioNova,
      demo: "https://fashion-nova-ecommerce-store.netlify.app/",
      code: "https://github.com/HaMza0718/Shopping_Cart",
    },
    {
      id: 6,
      src: blogApp,
      demo: "https://blog-app-reactjs-firebase.netlify.app/",
      code: "https://github.com/HaMza0718/Blog-App",
    },
  ];

  return (
    <div
      name="projects"
      className="w-full h-screen projects"
    >
      <div className="max-w-screen-xl p-4 sm:px-16 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-3xl sm:text-4xl text-white font-bold inline border-b-4 border-gray-600">
            Projects
          </p>
          <p className="py-6 text-xl text-gray-400">Somethings I've built with love, expertise and a pinch of magical ingredients.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto px-12 sm:px-0">
          {projects.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-800 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-500 hover:scale-95"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demo}
                  className="border-t-2 border-b-2 w-1/2 px-6 py-3 bg-black h-[50px] m-4 flex items-center justify-center rounded-xl cursor-pointer overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#011231] before:to-[rgb(129,175,216)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
                <a
                  href={code}
                  target="_blank"
                  rel="noreferrer"
                  className="border-b-2 border-t-2 w-1/2 px-6 py-3 bg-black h-[50px] m-4 flex items-center justify-center rounded-xl cursor-pointer overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#011231] before:to-[rgb(129,175,216)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
