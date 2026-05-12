import React from "react";

const OrderFlowPnL = ({ recentExecutions, maxAbsPnl }) => {
  return (
    <div className="h-full bg-[#0a0a0a] border border-white/5 rounded-2xl sm:rounded-[2rem] p-4 sm:p-6 lg:p-8 shadow-2xl flex flex-col">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
        <div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Order Flow P&L
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1 font-medium">
            Relative magnitude of recent trade outcomes.
          </p>
        </div>
        <button className="px-4 py-2 sm:py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl text-xs sm:text-sm font-bold text-white transition-all w-full sm:w-auto active:scale-[0.98]">
          Open Full Logbook
        </button>
      </div>

      <div className="flex flex-col gap-2 sm:gap-3 flex-1">
        {recentExecutions.map((trade) => {
          const isWin = trade.status === "Win";

          const rawPct = (Math.abs(trade.pnl) / maxAbsPnl) * 100;
          const widthPct = Math.min(rawPct, 70);

          const timeString = new Date(trade.date).toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          });

          return (
            <div
              key={trade.id}
              className="flex flex-col md:flex-row md:items-center gap-2 sm:gap-4 py-2.5 sm:py-3 px-3 sm:px-4 hover:bg-white/5 transition-colors rounded-xl group border border-transparent hover:border-white/5"
            >
              <div className="flex items-center justify-between md:justify-start w-full md:w-56 shrink-0">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#111] border border-white/10 flex items-center justify-center font-bold text-[10px] sm:text-xs text-white group-hover:border-emerald-500/50 transition-colors shrink-0">
                    {trade.asset.substring(0, 2)}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-white text-sm">
                      {trade.asset}
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono md:hidden">
                      {timeString}
                    </span>
                  </div>
                </div>

                <div className="md:hidden">
                  <span
                    className={`px-2 py-1 rounded text-[9px] font-black uppercase tracking-wider ${
                      trade.type === "Long"
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-red-500/10 text-red-400"
                    }`}
                  >
                    {trade.type}
                  </span>
                </div>
              </div>

              <div className="hidden md:flex items-center gap-4 xl:gap-8 shrink-0">
                <span className="text-xs text-gray-500 font-mono w-14 shrink-0">
                  {timeString}
                </span>
                <span
                  className={`px-2 py-1 rounded text-[10px] font-black uppercase tracking-wider w-16 text-center shrink-0 ${
                    trade.type === "Long"
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "bg-red-500/10 text-red-400"
                  }`}
                >
                  {trade.type}
                </span>

                <div className="hidden xl:flex items-center gap-2 text-gray-500 font-mono text-[10px] w-36 justify-center shrink-0">
                  <span>{trade.entry}</span>
                  <svg
                    className="w-3 h-3 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                  <span>{trade.exit}</span>
                </div>
              </div>

              <div className="w-full md:flex-1 flex items-center h-10 sm:h-12 bg-linear-to-r from-transparent via-white/5 to-transparent relative px-2 sm:px-4 rounded-lg">
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 z-0"></div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/30 z-0"></div>

                <div className="w-1/2 h-full flex justify-end items-center relative z-10 pr-0.5 sm:pr-1">
                  {!isWin && (
                    <>
                      <span className="text-[10px] sm:text-xs font-mono font-black text-red-400 mr-2 whitespace-nowrap shrink-0 group-hover:-translate-x-1 transition-transform">
                        -${Math.abs(trade.pnl).toFixed(2)}
                      </span>
                      <div
                        className="h-[30%] sm:h-[40%] bg-red-500/30 border border-red-500/50 rounded-l-sm group-hover:bg-red-500/50 transition-colors shadow-[0_0_10px_rgba(239,68,68,0)] group-hover:shadow-[0_0_10px_rgba(239,68,68,0.2)]"
                        style={{ width: `${Math.max(widthPct, 2)}%` }}
                      ></div>
                    </>
                  )}
                </div>

                <div className="w-1/2 h-full flex justify-start items-center relative z-10 pl-0.5 sm:pl-1">
                  {isWin && (
                    <>
                      <div
                        className="h-[30%] sm:h-[40%] bg-emerald-500/30 border border-emerald-500/50 rounded-r-sm group-hover:bg-emerald-500/50 transition-colors shadow-[0_0_10px_rgba(16,185,129,0)] group-hover:shadow-[0_0_10px_rgba(16,185,129,0.2)]"
                        style={{ width: `${Math.max(widthPct, 2)}%` }}
                      ></div>
                      <span className="text-[10px] sm:text-xs font-mono font-black text-emerald-400 ml-2 whitespace-nowrap shrink-0 group-hover:translate-x-1 transition-transform">
                        +${trade.pnl.toFixed(2)}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderFlowPnL;
