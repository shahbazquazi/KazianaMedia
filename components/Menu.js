import Link from "next/link";
import React, { useContext } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";
import AppContext from "./AppContext";

function Menu() {

  const {setOpenMenu} = useContext((AppContext));

  const closeMenu = () => {
    document.getElementById("menu").style.display = "none";
    setOpenMenu(false);
  }

  return (

    <motion.div id="menu" className="fixed top-0 bg-black text-[#d4af37] w-screen h-screen z-20 opacity-80" initial={{y: "-100"}} animate={{y: 0}} transition={{type: "spring", damping: 20}}>
      <div className="flex flex-col justify-center items-center w-screen h-screen space-y-10">
        <Link href="/" onClick={()=>closeMenu()}>
          <li className="cursor-pointer list-none text-4xl font-extrabold hover:text-white">
            Home
          </li>
        </Link>
        <Link href="/about" onClick={()=>closeMenu()}>
          <li className="cursor-pointer list-none text-4xl font-extrabold hover:text-white">
            About
          </li>
        </Link>
        <Link href="/#services" onClick={()=>closeMenu()}>
          <li className="cursor-pointer list-none text-4xl font-extrabold hover:text-white">
            Services
          </li>
        </Link>
        <Link href="/contact" onClick={()=>closeMenu()}>
          <li className="cursor-pointer list-none text-4xl font-extrabold hover:text-white">
            Contact
          </li>
        </Link>
        <Link href="/careers" onClick={()=>closeMenu()}>
          <li className="cursor-pointer list-none text-4xl font-extrabold hover:text-white">
            Careers
          </li>
        </Link>
        <div className="text-white flex justify-center w-screen space-x-10 text-xl">
        <Link href="https://www.facebook.com/kazianamedia/" target='_blank'>
     <FaFacebookF className="hover:text-[#d4af37]"/>
     </Link>
     <Link href="https://www.linkedin.com/company/kazianamedia/" target='_blank' >
     <FaLinkedinIn className="hover:text-[#d4af37]"/>
     </Link>
     <Link href="https://twitter.com/KazianaMedia/" target='_blank'>
     <FaTwitter className="hover:text-[#d4af37]"/>
     </Link>
     <Link href="https://www.instagram.com/kazianamedia/" target='_blank'>
     <FaInstagram className="hover:text-[#d4af37]"/>
     </Link>
     <Link href="https://www.youtube.com/@KazianaMedia/" target='_blank'>
     <FaYoutube className="hover:text-[#d4af37]"/>
     </Link>
        </div>
      </div>
    </motion.div>

  );
}

export default Menu;
