import React from 'react';
import { motion } from "framer-motion";
import Title from '@/components/Title';
import CareerForm from '@/components/CareerForm';

function careers() {
  return (
    <div>
        <Title title={"Careers"}/>
        <div className="relative w-screen h-screen">
        <motion.h1
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1.2 }}
          transition={{ duration: 1 }}
          className="absolute text-white left-1/4 top-2/4 text-center font-sans font-bold md:text-4xl w-1/2 h-1/2 z-10 sm:text-2xl max-[640px]:text-xl"
        >
          If you are a Career Enthusiast and wanted to thrive faster in your career <br />
          <span className="text-[#d4af37]"> Join our team by filling the Form below </span>
        </motion.h1>
        <video
          src="/videos/career.mp4"
          autoPlay
          loop
          muted
          className="w-screen h-screen object-cover opacity-30"
        />
      </div>
      <CareerForm/>
    </div>
  )
}

export default careers