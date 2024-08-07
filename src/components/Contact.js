import { React, useEffect } from "react";
import contact from "../assets/contact.jpg";
import "../index.css";
import { motion, useAnimation } from "framer-motion";

const Contact = () => {
  const controls = useAnimation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        controls.start({ opacity: 1, x: 0 });
      } else {
        controls.start({ opacity: 0, x: "4rem" });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <div name="contact" className="w-full h-screen contact">
      <div className="max-w-screen-xl p-4 sm:px-16 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-2">
          <p className="text-3xl sm:text-4xl text-white font-bold inline border-b-4 border-gray-600">
            Contact
          </p>
          <p className="mt-6 text-xl text-gray-400">Easy to communicate.</p>
          <div className="flex flex-col md:flex-row">
            <div className="flex-1">
              <div className="cont-img py-8 pr-0 md:pr-6">
                <div className="img-box">
                  <p>Get in touch!</p>
                  <img className="rounded-2xl" src={contact} alt="" />
                </div>
              </div>
            </div>
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={controls}
              exit={{ opacity: 0, x: -"7rem" }}
              transition={{ duration: 2 }}
              action="https://getform.io/f/7735f1c6-6f32-4b23-93d3-a1344da91dce"
              method="POST"
              className="flex-1 border rounded-2xl flex flex-col gap-y-4 pb-4 p-4 items-start shadow-sm shadow-gray-500"
            >
              <input
                required
                name="name"
                type="text"
                placeholder="Enter your name"
                className="text-white bg-transparent border-b py-3 outline-none w-full 
            placeholder:text-gray-600 focus:border-gray-200 transition-all"
              />
              <input
                required
                name="email"
                type="text"
                placeholder="Enter your email"
                className="text-white bg-transparent border-b py-3 outline-none w-full 
            placeholder:text-gray-600 focus:border-gray-200 transition-all"
              />
              <textarea
                required
                name="message"
                placeholder="Your message"
                className="text-white bg-transparent border-b py-8 outline-none w-full 
            placeholder:text-gray-600 focus:border-gray-200 transition-all resize-none mb-12"
              ></textarea>
              <button className="bg-neutral-950 text-gray-200 border border-neutral-400 border-b-4 font-medium overflow-hidden px-6 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                <span className="bg-neutral-400 shadow-neutral-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
