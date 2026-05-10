import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-text-element", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
      })
        .from(
          ".hero-canvas-container",
          {
            y: 60,
            opacity: 0,
            scale: 0.95,
            duration: 1.2,
          },
          "-=0.8",
        )
        .from(
          ".hero-floating-badge",
          {
            scale: 0,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: "back.out(1.5)",
          },
          "-=0.5",
        );

      gsap.to(".hero-canvas-container", {
        y: -10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 4,
        delay: 1,
      });

      gsap.to(".hero-floating-badge", {
        y: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 3,
        stagger: 0.2,
        delay: 1.5,
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[calc(100vh-8rem)] flex items-center px-4 md:px-8 lg:px-16 pt-12 pb-24 z-20"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
          <div className="hero-text-element inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></span>
            <span className="text-xs font-semibold text-emerald-400 tracking-wide">
              Live MT4/MT5 Auto-Sync
            </span>
          </div>

          <h1 className="hero-text-element text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Track Trades. <br className="hidden lg:block" />
            Analyze P&L. <br />
            <span className="block mt-2 text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-emerald-500 to-green-400 drop-shadow-[0_0_25px_rgba(16,185,129,0.4)]">
              Master Markets.
            </span>
          </h1>

          <p className="hero-text-element text-base md:text-lg text-gray-400 max-w-xl mb-10 leading-relaxed">
            India's most advanced automated trading journal. Sync your trades,
            journal every setup, and let AI do the deep analysis. Zero manual
            entry.
          </p>

          <div className="hero-text-element flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
            <button className="group relative w-full sm:w-auto px-8 py-3.5 rounded-lg font-bold text-emerald-400 bg-[#050505] border border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.15)] overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:border-emerald-400 hover:text-white">
              <div className="absolute inset-0 bg-emerald-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative z-10">Start Free Trial</span>
            </button>

            <button className="group w-full sm:w-auto px-8 py-3.5 rounded-lg font-bold text-gray-300 border border-white/10 bg-transparent hover:bg-emerald-500/10 hover:border-emerald-500/30 hover:text-emerald-400 transition-all">
              View Live Demo
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0 perspective-1000 z-10">
          <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="hero-canvas-container relative w-full p-2 md:p-3 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm shadow-2xl shadow-emerald-900/20 transform lg:-rotate-y-4 lg:rotate-x-2 transition-transform duration-700 hover:rotate-0">
            <div className="relative w-full rounded-2xl bg-[#0a0a0a] overflow-hidden border border-black shadow-inner">
              <img
                src="https://images.unsplash.com/photo-1640340434855-6084b1f4901c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="TradeX Dashboard Preview"
                className="w-full h-auto object-cover opacity-80"
              />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#0a0a0a] to-transparent"></div>
            </div>

            <div className="hero-floating-badge absolute -bottom-6 -left-4 md:-left-8 bg-[#0a0a0a]/90 border border-white/10 p-3 md:p-4 rounded-xl shadow-2xl flex items-center gap-3 backdrop-blur-md">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                <span className="text-emerald-500 text-lg">📈</span>
              </div>
              <div>
                <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider font-semibold">
                  Today's P&L
                </p>
                <p className="text-sm md:text-base font-bold text-emerald-400">
                  +$2,847.50
                </p>
              </div>
            </div>

            <div className="hero-floating-badge absolute -top-6 -right-4 md:-right-6 bg-[#0a0a0a]/90 border border-white/10 px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 backdrop-blur-md">
              <span className="text-xl">🎯</span>
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">
                  Win Rate
                </p>
                <p className="text-sm font-bold text-white">82.4%</p>
              </div>
            </div>

            <div className="hero-floating-badge absolute top-1/2 -translate-y-1/2 -right-4 md:-right-8 bg-[#0a0a0a]/90 border border-emerald-500/30 px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 backdrop-blur-md shadow-emerald-500/10">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <p className="text-xs md:text-sm font-bold text-emerald-400">
                3 Active Trades
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
