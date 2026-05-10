import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeCard, setActiveCard] = useState(-1);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let interval;
    if (isMobile) {
      setActiveCard(0);
      interval = setInterval(() => {
        setActiveCard((prev) => (prev + 1) % 4);
      }, 3000);
    } else {
      setActiveCard(-1);
    }
    return () => clearInterval(interval);
  }, [isMobile]);

  useGSAP(
    () => {
      gsap.fromTo(
        ".feature-header",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );

      gsap.fromTo(
        ".bento-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".bento-grid",
            start: "top 75%",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative w-full py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16 z-20 bg-[#050505] overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] md:w-3/4 h-1/2 bg-emerald-900/10 blur-[100px] md:blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-12 md:mb-20">
          <div className="feature-header inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></span>
            <span className="text-[10px] font-bold text-emerald-400 tracking-widest uppercase">
              Core Features
            </span>
          </div>

          <h2 className="feature-header text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Everything you need. <br className="hidden md:block" />
            <span className="text-gray-500">Nothing you don't.</span>
          </h2>

          <p className="feature-header text-gray-400 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed px-4 md:px-0">
            Stop gambling, start trading. We provide professional-grade,
            zero-latency tools to help you master Forex, Crypto, and US Indices
            without risking real capital.
          </p>
        </div>

        <div className="bento-grid grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div
            className={`bento-card group col-span-1 md:col-span-2 relative overflow-hidden rounded-[2rem] bg-[#111] border transition-all duration-500 p-6 md:p-8
            ${activeCard === 0 ? "border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.1)]" : "border-white/5 hover:border-emerald-500/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.1)]"}`}
          >
            <div
              className={`absolute inset-0 bg-linear-to-br from-emerald-500/5 to-transparent transition-opacity duration-700
              ${activeCard === 0 ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
            ></div>

            <div className="relative flex flex-col lg:flex-row gap-8 items-center h-full z-10">
              <div className="w-full lg:w-1/2">
                <div
                  className={`w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 transition-all duration-500
                  ${activeCard === 0 ? "scale-110 shadow-[0_0_15px_rgba(16,185,129,0.3)]" : "group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]"}`}
                >
                  <svg
                    className="w-6 h-6 text-emerald-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  Strategy Backtesting
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Test your ideas on real historical data before risking
                  capital. Replay the market candle by candle.
                </p>
                <ul className="space-y-3">
                  {[
                    "Replay trades on real market data",
                    "Win rate & expectancy analysis",
                    "Multiple timeframes (1m to 1W)",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm text-gray-300"
                    >
                      <svg
                        className="w-4 h-4 text-emerald-500 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`w-full lg:w-1/2 h-50 bg-[#0a0a0a] rounded-xl border p-4 relative overflow-hidden transition-colors
                ${activeCard === 0 ? "border-white/10" : "border-white/5 group-hover:border-white/10"}`}
              >
                <div
                  className={`absolute inset-0 flex items-end justify-between px-3 md:px-4 transition-opacity duration-500
                  ${activeCard === 0 ? "opacity-100" : "opacity-50 group-hover:opacity-100"}`}
                >
                  {[40, 70, 45, 90, 60, 85, 30, 50, 80].map((h, i) => (
                    <div
                      key={i}
                      className={`w-3 md:w-4 rounded-t-sm transition-colors duration-500
                        ${activeCard === 0 ? "bg-emerald-500" : "bg-emerald-500/40 group-hover:bg-emerald-500"}`}
                      style={{ height: `${h}%` }}
                    ></div>
                  ))}
                </div>
                <div className="absolute top-4 left-4 right-4 flex justify-between">
                  <span className="text-[10px] text-gray-500 font-mono">
                    EUR/USD • 15m
                  </span>
                  <span className="text-[10px] text-emerald-500 font-mono">
                    +1.24%
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`bento-card group col-span-1 relative overflow-hidden rounded-[2rem] bg-[#111] border transition-all duration-500 p-6 md:p-8 flex flex-col justify-between
            ${activeCard === 1 ? "border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.1)]" : "border-white/5 hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]"}`}
          >
            <div
              className={`absolute inset-0 bg-linear-to-bl from-blue-500/5 to-transparent transition-opacity duration-700
              ${activeCard === 1 ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
            ></div>

            <div className="relative z-10">
              <div
                className={`w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 transition-all duration-500
                ${activeCard === 1 ? "scale-110 shadow-[0_0_15px_rgba(59,130,246,0.3)]" : "group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"}`}
              >
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                $100k Virtual Capital
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Start with a $100,000 simulated balance. Practice prop-firm
                challenges and live trading risk-free.
              </p>
            </div>

            <div className="relative z-10 mt-8 md:mt-12">
              <span
                className={`text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-br transition-all duration-500 drop-shadow-md
                ${activeCard === 1 ? "from-white to-gray-400" : "from-gray-300 to-gray-700 group-hover:from-white group-hover:to-gray-400"}`}
              >
                $100K
              </span>
            </div>
          </div>

          <div
            className={`bento-card group col-span-1 relative overflow-hidden rounded-[2rem] bg-[#111] border transition-all duration-500 p-6 md:p-8
            ${activeCard === 2 ? "border-orange-500/30 shadow-[0_0_40px_rgba(249,115,22,0.1)]" : "border-white/5 hover:border-orange-500/30 hover:shadow-[0_0_40px_rgba(249,115,22,0.1)]"}`}
          >
            <div
              className={`absolute inset-0 bg-linear-to-br from-orange-500/5 to-transparent transition-opacity duration-700
              ${activeCard === 2 ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
            ></div>

            <div
              className={`relative z-10 w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6 transition-all duration-500
              ${activeCard === 2 ? "scale-110 shadow-[0_0_15px_rgba(249,115,22,0.3)]" : "group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.3)]"}`}
            >
              <svg
                className="w-6 h-6 text-orange-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="relative z-10 text-xl font-bold text-white mb-3">
              Zero-Lag Data
            </h3>
            <p className="relative z-10 text-gray-400 text-sm leading-relaxed">
              Experience live market volatility. Our tick-by-tick data feed
              ensures you trade the real price instantly.
            </p>

            <div className="relative z-10 mt-8 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
              </span>
              <span
                className={`text-xs font-mono transition-colors
                ${activeCard === 2 ? "text-orange-400" : "text-orange-400/80 group-hover:text-orange-400"}`}
              >
                <span
                  className={activeCard === 2 ? "hidden" : "group-hover:hidden"}
                >
                  9ms Latency
                </span>
                <span
                  className={
                    activeCard === 2 ? "inline" : "hidden group-hover:inline"
                  }
                >
                  {"< 4ms Latency"}
                </span>
              </span>
            </div>
          </div>

          <div
            className={`bento-card group col-span-1 md:col-span-2 relative overflow-hidden rounded-[2rem] bg-[#111] border transition-all duration-500 p-6 md:p-8
            ${activeCard === 3 ? "border-purple-500/30 shadow-[0_0_40px_rgba(168,85,247,0.1)]" : "border-white/5 hover:border-purple-500/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.1)]"}`}
          >
            <div
              className={`absolute inset-0 bg-linear-to-tl from-purple-500/5 to-transparent transition-opacity duration-700
              ${activeCard === 3 ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
            ></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 h-full">
              <div className="w-full md:w-1/2">
                <div
                  className={`w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 transition-all duration-500
                  ${activeCard === 3 ? "scale-110 shadow-[0_0_15px_rgba(168,85,247,0.3)]" : "group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"}`}
                >
                  <svg
                    className="w-6 h-6 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  Auto-Trading Journal
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Stop manually entering data in Excel. TradeZ securely connects
                  to your broker and automatically logs every entry, exit, and
                  P&L.
                </p>
              </div>

              <div className="w-full md:w-1/2 h-30 relative flex items-center justify-center">
                <div
                  className={`relative z-20 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#050505] border-2 flex items-center justify-center font-bold text-lg md:text-xl text-white transition-all duration-500
                  ${activeCard === 3 ? "border-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.4)]" : "border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.1)] group-hover:border-purple-400 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"}`}
                >
                  Z
                </div>

                <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-8">
                  <div
                    className={`w-10 h-10 rounded-lg bg-white/5 border flex items-center justify-center relative transition-colors duration-500 z-10
                    ${activeCard === 3 ? "border-white/30" : "border-white/10 group-hover:border-white/30"}`}
                  >
                    <span className="text-[10px] text-gray-300">MT5</span>
                    <div className="absolute -right-10 sm:-right-12 top-1/2 h-0.5 w-10 sm:w-12 bg-linear-to-r from-gray-500/20 to-purple-500/50 overflow-hidden">
                      <div
                        className={`h-full w-full bg-purple-400 transition-transform duration-1000 ease-in-out
                        ${activeCard === 3 ? "translate-x-full" : "-translate-x-full group-hover:translate-x-full"}`}
                      ></div>
                    </div>
                  </div>

                  <div
                    className={`w-10 h-10 rounded-lg bg-white/5 border flex items-center justify-center relative transition-colors duration-500 z-10
                    ${activeCard === 3 ? "border-white/30" : "border-white/10 group-hover:border-white/30"}`}
                  >
                    <span className="text-[10px] text-gray-300">BNC</span>
                    <div className="absolute -left-10 sm:-left-12 top-1/2 h-0.5 w-10 sm:w-12 bg-linear-to-l from-gray-500/20 to-purple-500/50 overflow-hidden">
                      <div
                        className={`h-full w-full bg-purple-400 transition-transform duration-1000 ease-in-out delay-150
                        ${activeCard === 3 ? "-translate-x-full" : "translate-x-full group-hover:-translate-x-full"}`}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
