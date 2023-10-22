import React from "react";
import { motion } from "framer-motion";

function Growth() {
  return (
    <div className="relative">
      <motion.h1
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1.2 }}
        transition={{ duration: 1 }}
        className="absolute text-white left-1/4 top-2/4 text-center font-sans font-bold md:text-4xl w-1/2 h-1/2 z-10 sm:text-4xl max-[640px]:text-3xl"
      >
        Grow your Business with our{" "}
        <span className="text-[#d4af37]"> Marketing Experts</span>
      </motion.h1>
      <video
        src="/videos/growth.mp4"
        autoPlay
        loop
        muted
        className="w-screen h-screen object-cover opacity-30"
      />
    </div>
  );
}

export default Growth;
