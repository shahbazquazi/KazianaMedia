import React, { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import styles from "@/styles/Home.module.css";


function Banner() {
  const [hide, setHide] = useState(false);

  const hidePrompt = () => {
    if (window.scrollY === 0) {
      setHide(false);
    }
    else {
      setHide(true);
    }

  };

  useEffect(() => {
    window.addEventListener("scroll", hidePrompt)
  }, [])
  

  return (
    <div>
      <div className="relative">
        <div className="w-screen h-screen">
          <div className = { hide ? `${styles.hideElement}`: `${styles.showElement}`} >
            <h1 className="absolute bottom-14 left-1/2 font-sans font-extrabold text-2xl text-white z-10 -translate-x-20 -translate-y-10 min-[320px]:text-lg sm:text-2xl">
              Unveil your Growth
            </h1>
            <FaArrowDown className="animate-bounce absolute bottom-14 left-1/2 text-2xl invert z-10" />
          </div>
        </div>
        <video
          src="/videos/bg_video.mp4"
          autoPlay
          loop
          muted
          className="absolute top-0 w-screen h-screen object-cover z-0 opacity-70"
        />
        
      </div>
    </div>
  );
}

export default Banner;
