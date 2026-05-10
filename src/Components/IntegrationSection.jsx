import React from "react";
import InteractiveMockup from "./InteractiveMockup";
import IntegrationBackground from "./IntegrationBackground";

const IntegrationSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#050505] flex flex-col items-center justify-center py-24 overflow-hidden border-t border-white/5 z-20">
      <div className="relative z-20 text-center mb-12 md:mb-16 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></span>
          <span className="text-[10px] font-bold text-emerald-400 tracking-widest uppercase">
            Live Broker Sync
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
          Connect your broker.
          <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-500">
            We handle the math.
          </span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Link your preferred Demat account in seconds. TradeZ instantly pulls
          your trade history, calculates highly accurate P&L, and streams
          tick-by-tick data directly to your dashboard.
        </p>
      </div>

      <div className="relative w-full max-w-7xl mx-auto min-h-125 md:min-h-150 flex items-center justify-center">
        <IntegrationBackground />

        <div className="relative z-10 w-full px-4 transform transition-transform hover:scale-[1.02] duration-700">
          <InteractiveMockup />
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
