import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import RippleGrid from "./RippleGrid";

gsap.registerPlugin(ScrollTrigger);

const CtaSection = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".cta-content",
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#050505] flex flex-col items-center justify-center overflow-hidden border-t border-white/5 z-20"
    >
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="absolute inset-0 opacity-80">
          <RippleGrid
            enableRainbow={false}
            gridColor="#10B981"
            rippleIntensity={0.05}
            gridSize={15}
            gridThickness={15}
            glowIntensity={0.8}
            mouseInteraction={false}
            opacity={0.8}
          />
        </div>

        <div className="absolute inset-0 bg-[#050505] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_15%,transparent_100%)] pointer-events-none"></div>
      </div>

      <div className="cta-content relative z-10 flex flex-col items-center text-center px-4 w-full max-w-4xl">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 leading-none">
          Built for <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-400 drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]">
            Speed.
          </span>
        </h2>

        <p className="text-gray-400 text-lg md:text-xl lg:text-2xl mb-12 max-w-2xl font-medium">
          Quick execution, automated journaling, and zero-latency analytics for
          the modern prop trader.
        </p>

        <button className="group relative overflow-hidden rounded-full bg-white/5 border border-emerald-500/50 px-10 py-5 font-bold text-white shadow-[0_0_40px_rgba(16,185,129,0.15)] transition-all duration-500 hover:shadow-[0_0_60px_rgba(16,185,129,0.4)] hover:bg-white/10 hover:border-emerald-400 active:scale-95 mb-16">
          <div className="absolute inset-0 bg-emerald-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          <span className="relative z-10 flex items-center justify-center gap-3 text-lg tracking-wide uppercase">
            Get Started Now
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>
        </button>

        <div className="flex flex-col items-center mt-8">
          <div className="w-12 h-0.5 bg-linear-to-r from-transparent via-emerald-500/50 to-transparent mb-8"></div>
          <p className="text-gray-500 italic text-sm md:text-base font-serif max-w-lg leading-relaxed">
            "Earn with your mind, not your time."
          </p>
          <span className="text-gray-600 text-xs font-bold uppercase tracking-widest mt-4">
            — Naval Ravikant
          </span>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
