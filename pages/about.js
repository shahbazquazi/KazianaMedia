import React from "react";
import { motion } from "framer-motion";
import Emailus from "@/components/Emailus";
import Title from "@/components/Title";


function about() {
  return (
    <>
    <Title title={"About"}/>
    <div className="overflow-hidden">
      <div>
        <video
          src="/videos/about.mp4"
          autoPlay
          loop
          muted
          className="w-screen h-screen object-cover opacity-30"
        />
        <motion.h1
          className="absolute text-white left-1/4 top-2/4 text-center font-sans font-bold  w-1/2 h-1/2 z-10 lg:text-2xl sm:text-2xl max-[640px]:text-2xl"
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1.2 }}
          transition={{ duration: 1 }}
        >
          <span className="text-white lg:text-5xl md:text-3xl sm:text-2xl mb-10">
            Welcome to <span className="text-[#d4af37]">Kaziana Media</span>
          </span>
          <br />
          Your <span className="text-[#d4af37]">Trust</span> is Our main{" "}
          <span className="text-[#d4af37]">Priority</span>
        </motion.h1>
      </div>
      <div>
      <div className="grid grid-cols-2 mt-10 max-[1080px]:grid-cols-1">
        <div className="m-10">
          <motion.img
            className="w-screen opacity-50"
            src="/images/about1.jpg"
            alt="Digital Marketing"
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
        <motion.div
          className="m-10 flex flex-col justify-center items-center"
          initial={{ x: "100%" }}
          whileInView={{ x: "0%" }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="flex justify-center items-center text-center text-white font-sans lg:text-2xl sm:text-2xl max-[640px]:text-2xl">
            We have started this Marketing Agency to Solve the Problem of Small
            to Mid-size businesses that are not getting the best marketing
            Geniuses around
          </h1>
        </motion.div>
        </div>
        <div className="grid grid-cols-2 mt-10 max-[1080px]:grid-cols-1">
        <motion.div
          className="m-10 flex flex-col justify-center items-center"
          initial={{ x: "-100%" }}
          whileInView={{ x: "0%" }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="flex justify-center items-center text-center text-white font-sans lg:text-2xl sm:text-2xl max-[640px]:text-2xl">
            We are bringing you the People who Love their work and want to Grow
            as your business Grows
          </h1>
        </motion.div>
        <div className="m-10">
          <motion.img
            className="w-screen opacity-50"
            src="/images/about2.jpg"
            alt="Digital Marketing"
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
        </div>
        <div className="grid grid-cols-2 mt-10 max-[1080px]:grid-cols-1">
        <div className="m-10">
          <motion.img
            className="w-screen opacity-50"
            src="/images/about3.jpg"
            alt="Digital Marketing"
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
        <motion.div
          className="m-10 flex flex-col justify-center items-center"
          initial={{ x: "100%" }}
          whileInView={{ x: "0%" }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="flex justify-center items-center text-center text-white font-sans lg:text-2xl sm:text-2xl max-[640px]:text-2xl">
            Our Marketing Strategy makes you stand as a Brand in your Industry
          </h1>
        </motion.div>
        </div>
      </div>
      <Emailus/>
    </div>
    </>
  );
}

export default about;
