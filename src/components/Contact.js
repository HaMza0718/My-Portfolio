import React from "react";
import contact from "../assets/contact.jpg";
import { motion } from "framer-motion";
import { FADE_LEFT, FADE_UP } from "../utils/scrollConfig";
import SectionHeading from "./SectionHeading";

const Contact = () => (
  <div id="contact" name="contact" className="contact h-screen w-full">
    <div className="mx-auto flex h-full w-full max-w-screen-xl flex-col justify-center p-4 sm:px-16">
      <div className="pb-2">
        <motion.div {...FADE_UP}>
          <SectionHeading
            title="Contact"
            subtitle="Easy to communicate."
          />
        </motion.div>

        <div className="flex flex-col md:flex-row">
          <motion.div className="flex-1" {...FADE_UP} transition={{ ...FADE_UP.transition, delay: 0.05 }}>
            <div className="cont-img py-8 pr-0 md:pr-6">
              <div className="img-box">
                <p>Get in touch!</p>
                <img className="rounded-2xl" src={contact} alt="Contact" />
              </div>
            </div>
          </motion.div>

          <motion.form
            {...FADE_LEFT}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            action="https://getform.io/f/7735f1c6-6f32-4b23-93d3-a1344da91dce"
            method="POST"
            className="flex flex-1 flex-col items-start gap-y-4 rounded-2xl border p-4 pb-4 shadow-sm shadow-gray-500"
          >
            <input
              required
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full border-b bg-transparent py-3 text-white outline-none transition-all placeholder:text-gray-600 focus:border-gray-200"
            />
            <input
              required
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full border-b bg-transparent py-3 text-white outline-none transition-all placeholder:text-gray-600 focus:border-gray-200"
            />
            <textarea
              required
              name="message"
              placeholder="Your message"
              className="mb-12 w-full resize-none border-b bg-transparent py-8 text-white outline-none transition-all placeholder:text-gray-600 focus:border-gray-200"
            />
            <button type="submit" className="btn-standard">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
