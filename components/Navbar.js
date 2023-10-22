import React, { useContext } from "react";
import styles from "@/styles/Home.module.css";
import Menu from "@/components/Menu";
import AppContext from "./AppContext";
import Link from "next/link";

function Navbar() {

  const {openMenu, setOpenMenu} = useContext(AppContext);

  const setOpenState = () => {
    let reverseOpenedMenu = openMenu;

    setOpenMenu(!reverseOpenedMenu);
  };

  return (
    <div>
      <nav className="fixed bg-transparent text-metallicGoldS w-screen h-24 z-30 max-[820px]:bg-black h-16">
        <div className="grid grid-cols-2">
          <div className="flex justify-start items-end ml-5 h-20  max-[640px]:ml-0">
            <Link href="/">
            <img src="/logo.svg" alt="KazianaMedia" className="h-10 m-5 w-60"/>
            </Link>
          </div>
          <div className="flex justify-end items-end h-18 mr-16 mb-3 max-[640px]:mr-5 h-16">
            <div
              className={
                openMenu ? `${styles.menuButtonOpen}` : `${styles.menuButton}`
              }
              onClick={() => setOpenState()}
            >
              <div className={styles.menuButtonBurger}></div>
            </div>
          </div>
        </div>
      </nav>
      <div>{openMenu === true ? <Menu /> : null}</div>
    </div>
  );
}

export default Navbar;
