import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import "../index.css";
import Typical from "react-typical";
import { motion } from "framer-motion";

const Home = () => {

  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../data/heroImg.json"),
      rendererSettings: {
        scaleMode: "noScale",
        progressiveLoad: false,
        hideOnTransparent: true,
      },
    });
    return () => {
      lottie.destroy();
    };
  }, []);

  const redirectToGithub = () => {
    window.open("https://github.com/HaMza0718", "_blank");
  };
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full pt-16 sm:pt-20 md:flex-row">
        <div className="flex flex-col justify-center py-7 -mt-24">
          <h2 className="text-2xl sm:text-5xl font-bold text-white font-signature px-4 md:px-0">
            <Typical
              steps={['Hi! Im Hamza Yasir,', 1000, 'Frontend Web Developer.', 500]}
              loop={Infinity}
              wrapper="p"
            />
          </h2>
          <p className="text-gray-400 py-4 px-4 md:px-0 max-w text-xs sm:text-base">
            Welcome to my portfolio! As a frontend developer, I specialize in
            creating captivating and user-friendly web experiences.
            <br />
            Explore my work to see how I blend design and code to craft visually
            stunning and responsive websites.
          </p>
          <div className="px-4 md:px-0">
            <button
              onClick={redirectToGithub}
              className="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900"
            >
              <svg
                viewBox="0 0 24 24"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#FFFFFF"
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                ></path>
              </svg>
              Github
            </button>
          </div>
        </div>
        <motion.div
          initial={{ x: "7rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, type: "tween" }}
          className="container mx-auto w-2/3 md:w-2/3" ref={container}>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
