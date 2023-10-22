import { useState } from "react";
import AppContext from "@/components/AppContext";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import NextNProgress from 'nextjs-progressbar';


export default function App({ Component, pageProps }) {
  const [openMenu, setOpenMenu] = useState(false);

  const options = {
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    transitions: transitions.SCALE,
  };

  return (
    <>
      <AppContext.Provider value={{ openMenu, setOpenMenu }}>
      <AlertProvider template={AlertTemplate} {...options}>
        <div className="overflow-hidden">
        <NextNProgress color="#d4af37" />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        </div>
        </AlertProvider>
      </AppContext.Provider>
    </>
  );
}
