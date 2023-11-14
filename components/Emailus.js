import React from "react";
import { motion } from "framer-motion";

function Emailus() {
  return (
    <div className="relative w-screen h-screen mt-10">
      <motion.h1
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1.2 }}
        transition={{ duration: 1 }}
        className=" text-white absolute left-1/4 top-2/4 text-center font-sans font-bold md:text-4xl w-1/2  z-10 lg:text-4xl sm:text-3xl max-[640px]:text-3xl"
      >
        Mail us at : <br/><span className="text-[#d4af37]">contact@<br/>kazianamedia.com</span>
      </motion.h1>
      <img className="w-screen h-screen opacity-30" src="/images/emailus.jpg" alt="Email Us" />
    </div>
  );
}

export default Emailus;
