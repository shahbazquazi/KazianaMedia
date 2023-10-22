import React from "react";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import Title from "@/components/Title";

function contact() {
  return (
    <div>
      <Title title={"Contact"}/>
      <div className="relative w-screen h-screen">
        <motion.h1
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1.2 }}
          transition={{ duration: 1 }}
          className="absolute text-white left-1/4 top-2/4 text-center font-sans font-bold md:text-4xl w-1/2 h-1/2 z-10 sm:text-2xl max-[640px]:text-xl"
        >
          Thank You for Trusting Us <br />
          To set up a Meeting, Mail us at <br />
          <span className="text-[#d4af37]"> kazianamedia@gmail.com </span>
          <br />
          <br />
          <br />
          <span className="mt-20 sm:text-2xl max-[640px]:text-xl">Or</span>
        </motion.h1>
        <video
          src="/videos/contactus.mp4"
          autoPlay
          loop
          muted
          className="w-screen h-screen object-cover opacity-30"
        />
      </div>
      <ContactForm/>
    </div>
  );
}

export default contact;
