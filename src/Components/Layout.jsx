import React from "react";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

import Aurora from "./Aurora";
import LiveFeed from "./LiveFeed";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
        <div className="fixed inset-0 z-0 pointer-events-none transform-gpu will-change-transform">
          <div className="absolute inset-0 opacity-50 transform-gpu">
            <Aurora
              colorStops={["#011c14", "#10b981", "#000000"]}
              blend={0.7}
              amplitude={1.8}
              speed={0.5}
            />
          </div>

          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,#050505_70%,#050505)] transform-gpu"></div>

          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[32px_32px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] transform-gpu"></div>
        </div>

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
