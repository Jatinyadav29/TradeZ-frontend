import React, { useEffect, useRef } from "react";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import gsap from "gsap";
import Aurora from "./Aurora";
import LiveFeed from "./LiveFeed";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      autoRaf={false}
      options={{
        lerp: 0.08,
        duration: 1.5,
        smoothWheel: true,
      }}
    >
      <div className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden flex flex-col font-sans">
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 opacity-50">
            <Aurora
              colorStops={["#011c14", "#00FF66", "#000000"]}
              blend={0.7}
              amplitude={1.8}
              speed={0.5}
            />
          </div>

          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,#050505_70%,#050505)]"></div>

          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[32px_32px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="sticky top-0 z-50 flex flex-col w-full">
          <Navbar />
          <LiveFeed />
        </div>

        <main className="relative z-20 grow flex flex-col">{children}</main>

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Layout;
