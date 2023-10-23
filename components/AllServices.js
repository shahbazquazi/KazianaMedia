import React from "react";
import { motion } from "framer-motion";

function AllServices() {
  return (
    <div className="grid grid-cols-2 mt-10 min-[320px]:grid-cols-1 sm:grid-cols-2">
      <div className="m-10">
        <motion.img
          className="w-screen opacity-50"
          src="/images/webdesign.jpg"
          alt="Web Design"
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
        <h1 className="text-[#d4af37] m-5 font-sans font-bold z-10 lg:text-4xl md:text-3xl sm:text-4xl max-[640px]:text-3xl">
          Web Design
        </h1>
        <span className="text-white text-center font-sans z-10 w-5/6 lg:text-2xl sm:text-2xl max-[640px]:text-2xl">
          We love to Design a website that Engage your Customers and give you a
          Profitable results
        </span>
      </motion.div>
      <motion.div
        className="m-10 flex flex-col justify-center items-center"
        initial={{ x: "-100%" }}
        whileInView={{ x: "0%" }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="text-[#d4af37] m-5 font-sans font-bold text-center z-10 lg:text-4xl md:text-3xl sm:text-4xl max-[640px]:text-3xl">
          Web Development
        </h1>
        <span className="text-white text-center font-sans z-10 w-5/6 lg:text-2xl sm:text-2xl max-[640px]:text-2xl">
          We are ready to Develop your website which are going to be Scalable
          and Fast
        </span>
      </motion.div>
      <div className="m-10">
        <motion.img
          className="w-screen opacity-50"
          src="/images/webdevelopment.jpg"
          alt="Web Development"
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
      <div className="m-10">
        <motion.img
          className="w-screen opacity-50"
          src="/images/socialmedia.jpg"
          alt="Social Media Marketing"
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
        <h1 className="text-[#d4af37] m-5 font-sans font-bold text-center z-10 lg:text-4xl md:text-3xl sm:text-4xl max-[640px]:text-3xl">
          Social Media Marketing
        </h1>
        <span className="text-white text-center font-sans z-10 w-5/6 lg:text-2xl sm:text-2xl max-[640px]:text-2xl">
          People are spending lots of time online, Today it is Required to have
          a Social Presence to get your Customers' Attention
        </span>
      </motion.div>
      <motion.div
        className="m-10 flex flex-col justify-center items-center"
        initial={{ x: "-100%" }}
        whileInView={{ x: "0%" }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="text-[#d4af37] m-5 font-sans font-bold z-10 lg:text-4xl md:text-3xl sm:text-4xl max-[640px]:text-3xl">
          SEO
        </h1>
        <span className="text-white text-center font-sans z-10 w-5/6 lg:text-2xl sm:text-2xl max-[640px]:text-2xl">
          Our SEO Experts try their level Best to make sure you are always the
          Top Priority of Search Engines
        </span>
      </motion.div>
      <div className="m-10">
        <motion.img
          className="w-screen opacity-50"
          src="/images/seo.jpg"
          alt="SEO"
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
      <div className="m-10">
        <motion.img
          className="w-screen opacity-50"
          src="/images/sem.jpg"
          alt="Search Engine Marketing"
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
        <h1 className="text-[#d4af37] m-5 font-sans font-bold text-center z-10 lg:text-4xl md:text-3xl sm:text-4xl max-[640px]:text-3xl">
          Search Engine Marketing
        </h1>
        <span className="text-white text-center font-sans z-10 w-5/6 lg:text-2xl sm:text-2xl max-[640px]:text-2xl">
          Paid Marketing is the Best option for Fast Scaling your Business and
          being Noticeable to your Target Customers
        </span>
      </motion.div>
      <motion.div
        className="m-10 flex flex-col justify-center items-center"
        initial={{ x: "-100%" }}
        whileInView={{ x: "0%" }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="text-[#d4af37] m-5 font-sans font-bold z-10 lg:text-4xl md:text-3xl sm:text-4xl max-[640px]:text-3xl">
          Email Marketing
        </h1>
        <span className="text-white text-center font-sans z-10 w-5/6 lg:text-2xl sm:text-2xl max-[640px]:text-2xl">
          Email Marketing is an Effective tool to Engage your Customers and
          provide them with Information about your Products and Services
        </span>
      </motion.div>
      <div className="m-10">
        <motion.img
          className="w-screen opacity-50"
          src="/images/email.jpg"
          alt="Email Marketing"
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
}

export default AllServices;
