import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";



function Services() {
  return (
    <div id="services" className="relative w-screen h-screen">
       <motion.h1
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1.2 }}
        transition={{ duration: 1 }}
        className="absolute text-white left-1/4 top-2/4 text-center font-sans font-bold md:text-4xl w-1/2 h-1/2 z-10 sm:text-4xl max-[640px]:text-3xl"
      >
      <span className="text-[#d4af37]">Services</span> that helps to Grow your business fast{" "}
        
      </motion.h1>
      <FaArrowDown className="animate-bounce absolute bottom-20 left-1/2 text-2xl invert z-10" />
      <video
        src="/videos/services.mp4"
        autoPlay
        loop
        muted
        className="mt-20 w-screen h-screen object-cover opacity-40"
      />
    </div>
  );
}

export default Services;
