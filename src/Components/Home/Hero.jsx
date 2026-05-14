import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-4rem)] pt-20 md:pt-32 pb-16 px-4 flex flex-col items-center overflow-x-hidden bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(16,185,129,0.12)_0%,rgba(5,5,5,1)_100%)] bg-[#050505] z-10">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[4rem_4rem] -z-20 pointer-events-none"></div>

      <div className="absolute top-[15%] left-[5%] md:left-[20%] w-10 h-10 md:w-12 md:h-12 rounded-full bg-linear-to-br from-[#111] to-emerald-900/30 border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.3)] flex items-center justify-center text-emerald-300 font-black text-lg md:text-xl z-0 animate-bounce animation-duration-[4s]">
        $
      </div>

      <div className="absolute top-[25%] right-[5%] md:right-[20%] w-12 h-12 md:w-14 md:h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.2)] flex items-center justify-center text-emerald-400 z-0 animate-bounce animation-duration-[5s]">
        <svg
          className="w-5 h-5 md:w-6 md:h-6 drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      </div>

      <div className="text-center z-20 max-w-5xl mx-auto w-full mt-4 md:mt-0 px-2">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[1.05] mb-5 md:mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          Your edge deserves <br />
          <span className="inline-block px-4 text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-cyan-300 to-emerald-400 bg-size-[200%_auto] animate-text-shimmer text-glow">
            a platform that feels elite
          </span>
        </h1>

        <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto font-medium mb-8 md:mb-10 px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
          Track your executions, understand your risk patterns, and analyze what
          drives your P&L — all in one beautifully calm, data-driven space.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <Link
            to="/sign-up"
            className="px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-black rounded-full font-bold text-sm transition-transform ease-linear duration-300 hover:scale-105 w-full sm:w-auto shadow-[0_0_20px_rgba(16,185,129,0.3)]"
          >
            Start Here
          </Link>
          <Link
            to="/sign-in"
            className="px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-bold text-white text-sm transition-colors w-full sm:w-auto backdrop-blur-md"
          >
            Explore Demo
          </Link>
        </div>
      </div>

      <div className="relative w-full max-w-250 mt-16 md:mt-24 h-87.5 md:h-100 flex justify-center z-20 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500 perspective-1000">
        <div className="absolute -top-6 md:-top-8 left-[10%] md:left-[25%] bg-[#111] border border-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl shadow-xl flex items-center gap-2 z-0">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            NY4 Live
          </span>
        </div>

        <div className="absolute top-10 md:top-8 -left-4 sm:left-[5%] md:left-[15%] w-60 md:w-72 h-70 md:h-80 bg-[#0a0a0a] border border-white/5 rounded-2xl p-5 md:p-6 shadow-2xl origin-bottom-right -rotate-12 hover:rotate-[-8deg] transition-transform duration-500 z-10">
          <div className="flex items-center gap-3 mb-5 md:mb-6">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-500">
              🏆
            </div>
            <div>
              <p className="text-[9px] md:text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                Highest Win Rate
              </p>
              <p className="text-white font-bold text-xs md:text-sm">EUR/USD</p>
            </div>
          </div>
          <p className="text-2xl md:text-3xl font-black text-white mb-2">
            82.4%
          </p>
          <p className="text-[10px] md:text-xs text-gray-400 font-medium">
            Over the last 45 executions, this pair yields your highest R:R
            ratio.
          </p>
        </div>

        <div className="absolute top-10 md:top-8 -right-4 sm:right-[5%] md:right-[15%] w-60 md:w-72 h-70 md:h-80 bg-[#0a0a0a] border border-white/5 rounded-2xl p-5 md:p-6 shadow-2xl origin-bottom-left rotate-12 hover:rotate-[8deg] transition-transform duration-500 z-10">
          <div className="flex items-center gap-3 mb-5 md:mb-6">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-blue-500">
              🖥️
            </div>
            <div>
              <p className="text-[9px] md:text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                AI Insight
              </p>
              <p className="text-white font-bold text-xs md:text-sm">
                Session Bias
              </p>
            </div>
          </div>
          <p className="text-sm md:text-lg font-bold text-gray-200 mb-2 leading-snug">
            You are <span className="text-emerald-400">3x more likely</span> to
            close in profit during the London Session.
          </p>
        </div>

        <div className="absolute top-0 w-70 sm:w-[320px] bg-[#111] border border-white/10 rounded-2xl p-5 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:-translate-y-2 transition-transform duration-500 z-30 ring-1 ring-white/5">
          <div className="w-full flex justify-between items-center mb-5 md:mb-6">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-500">
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 rounded-md text-[9px] md:text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
              Win
            </span>
          </div>
          <p className="text-xs md:text-sm text-gray-400 font-medium mb-1">
            Recent Execution
          </p>
          <h3 className="text-xl md:text-2xl font-black text-white mb-5 md:mb-6">
            Long <span className="text-emerald-400">XAU/USD</span>
          </h3>
          <div className="space-y-3 md:space-y-4 border-t border-white/5 pt-4">
            <div className="flex justify-between text-[10px] md:text-xs">
              <span className="text-gray-500">Entry</span>
              <span className="font-mono text-gray-300">2341.50</span>
            </div>
            <div className="flex justify-between text-[10px] md:text-xs">
              <span className="text-gray-500">Exit</span>
              <span className="font-mono text-gray-300">2348.10</span>
            </div>
            <div className="flex justify-between pt-1 md:pt-2 border-t border-white/5">
              <span className="text-xs md:text-sm font-bold text-white">
                Net P&L
              </span>
              <span className="text-xs md:text-sm font-black font-mono text-emerald-400">
                +$1,245.00
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
