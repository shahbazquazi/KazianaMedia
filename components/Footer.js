import React from 'react'
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube, FaCopyright } from "react-icons/fa";

function Footer() {
  return (
    <div className='mt-20 mb-20'>
     <div className='text-white flex justify-center w-screen space-x-10 text-xl'>
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
     <div className='text-white mt-10 text-base flex justify-center items-center space-x-2'>
     <FaCopyright/>
     <h1>2024 KazianaMedia</h1>
     </div>
    </div>
  )
}

export default Footer