import { React, useEffect } from "react";
import education from "../assets/education.PNG";
import { motion, useAnimation } from "framer-motion";
import { BsFolderSymlinkFill } from "react-icons/bs";

const About = () => {
  const controls = useAnimation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        controls.start({ opacity: 1, x: 0 });
      } else {
        controls.start({ opacity: 0, x: -"4rem" });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="max-w-screen-xl p-4 sm:px-16 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-3">
          <p className="text-3xl sm:text-4xl text-white font-bold inline border-b-4 border-gray-600">
            About
          </p>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={controls}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 2 }}
            className="flex flex-col lg:flex-row gap-1"
          >
            <div className="mt-6 flex-1">
              <p className="text-base text-gray-400">
                My studies have provided me with a strong foundation in computer
                science, including Web Development, Data Structures, Algorithms,
                Operating Systems, Software Engineering etc. I have also gained
                experience in programming languages during my academic time.
              </p>
              <p className="text-base text-gray-400 py-2">
                My expertise are in Frontend Web Development, I've also done
                multiple certification in it.
              </p>
              <div className="mt-2 sm:mt-4 flex flex-col items-start">
                <p className="text-white text-2xl mb-2">Certificates:</p>
                <a
                  className="flex items-center text-base text-gray-400 hover:text-white"
                  href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-b6773ede-e3a3-4da4-96f3-ed8a52fd63f7.pdf"
                >
                  <BsFolderSymlinkFill className="pr-1" size={25} />
                  The Complete ReactJs Course - Basics to Advanced [2023].
                </a>
                <a
                  className="flex items-center text-base text-gray-400 py-2 hover:text-white"
                  href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-f900bf97-d2e8-4e98-81a6-36fc643fd66d.pdf"
                >
                  <BsFolderSymlinkFill className="pr-1" size={25} />
                  Complete Javascript & jQuery Course with Bonus Vue JS Intro.
                </a>
                <a
                  className="flex items-center text-base text-gray-400 hover:text-white"
                  href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-209cf508-1c08-4f99-9794-8d6db7612200.pdf"
                >
                  <BsFolderSymlinkFill className="pr-1" size={25} />
                  Complete Responsive Web Development.
                </a>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: "7rem" }}
              animate={controls}
              exit={{ opacity: 0, x: 0 }}
              transition={{ duration: 2 }}
              className="py-6 pr-0 md:pr-6"
            >
              <img
                className="rounded-xl shadow-md shadow-gray-500 hover:scale-95 duration-300"
                src={education}
                alt=""
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
