import React from "react";
import { motion } from "framer-motion"


function Banner2() {

  return (
    <div>
      <div id="banner2Page" className="relative w-screen h-screen ">
        <div className="text-white">
          <motion.h1
            initial={{scale:0.5}}
            whileInView={{scale:1}}
            transition={{duration:1}}
            className="absolute left-1/4 top-1/3 text-center font-sans font-bold  md:text-5xl w-1/2 h-1/2 z-10 sm:text-4xl max-[640px]:text-3xl"
          >
            We are a <span className="text-[#d4af37]">Marketing Agency</span>{" "}
            that works to grab your Customers' Attention in this{" "}
            <span className="text-[#d4af37]">Fast-Paced </span> world
          </motion.h1>
        </div>
        <video
          src="/videos/banner2.mp4"
          autoPlay
          loop
          muted
          className="w-screen h-screen object-cover opacity-30"
        />
      </div>
    </div>
  );
}

export default Banner2;
