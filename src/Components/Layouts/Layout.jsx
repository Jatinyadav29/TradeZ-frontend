import React from "react";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

import Navbar from "../Navbar";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1.2,
      }}
    >
      <div className="relative min-h-screen bg-[#050505] text-white flex flex-col font-sans">
        <div className="sticky top-0 z-50 flex flex-col w-full">
          <Navbar />
        </div>

        <main className="relative z-20 grow flex flex-col overflow-x-hidden">
          {children}
        </main>

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Layout;
