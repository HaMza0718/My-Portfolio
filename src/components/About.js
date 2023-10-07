import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="overflow-auto max-w-screen-xl p-4 sm:px-16 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-3">
          <p className="text-3xl sm:text-4xl text-white font-bold inline border-b-4 border-gray-600">
            About
          </p>
          <p className="text-base sm:text-xl mt-20 text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure vitae
            distinctio, qui rerum expedita quibusdam ipsam reprehenderit cum
            inventore repellendus quis, nostrum ea necessitatibus eius!
          </p>
          <br />
          <p className="text-base sm:text-xl text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos
            id culpa! Perspiciatis sapiente quos, suscipit voluptates optio
            eaque accusamus?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
