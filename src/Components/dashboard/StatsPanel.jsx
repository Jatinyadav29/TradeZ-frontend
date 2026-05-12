import React from "react";

const StatsPanel = ({
  accountBalance,
  totalPnL,
  roi,
  winRate,
  tradesCount,
  profitFactor,
}) => {
  return (
    <div className="relative bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 rounded-[2rem] shadow-2xl overflow-hidden group">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-75 bg-emerald-900/10 blur-[100px] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>

      <div className="relative z-10 flex flex-wrap lg:flex-nowrap p-1 sm:p-2">
        <div className="w-1/2 lg:w-1/4 p-4 sm:p-6 border-b border-r lg:border-b-0 border-white/5 hover:bg-white/2 transition-colors rounded-tl-xl lg:rounded-l-xl flex flex-col justify-center">
          <p className="text-gray-500 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1 sm:mb-2">
            Account Balance
          </p>
          <h2 className="text-2xl sm:text-3xl xl:text-4xl font-black text-white tracking-tight truncate">
            $
            {accountBalance.toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}
          </h2>
        </div>

        <div className="w-1/2 lg:w-1/4 p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-white/5 hover:bg-white/2 transition-colors rounded-tr-xl lg:rounded-none flex flex-col justify-center">
          <p className="text-gray-500 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1 sm:mb-2">
            Net P&L
          </p>
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
            <h2
              className={`text-2xl sm:text-3xl xl:text-4xl font-black tracking-tight truncate ${totalPnL >= 0 ? "text-emerald-400" : "text-red-400"}`}
            >
              {totalPnL >= 0 ? "+" : ""}$
              {totalPnL.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </h2>
            <span className="text-[10px] sm:text-xs text-emerald-500 font-extrabold bg-emerald-500/10 px-1.5 py-0.5 rounded-md w-fit">
              +{roi}%
            </span>
          </div>
        </div>

        <div className="w-1/2 lg:w-1/4 p-4 sm:p-6 border-r lg:border-r border-white/5 hover:bg-white/2 transition-colors rounded-bl-xl lg:rounded-none flex flex-col justify-center">
          <p className="text-gray-500 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1 sm:mb-2">
            Win Rate
          </p>
          <div className="flex items-baseline gap-1 sm:gap-2">
            <h2 className="text-2xl sm:text-3xl xl:text-4xl font-black text-white tracking-tight">
              {winRate.toFixed(1)}%
            </h2>
            <span className="text-[9px] sm:text-xs text-gray-500 font-medium whitespace-nowrap">
              / {tradesCount} trades
            </span>
          </div>
        </div>

        <div className="w-1/2 lg:w-1/4 p-4 sm:p-6 hover:bg-white/2 transition-colors rounded-br-xl lg:rounded-r-xl flex flex-col justify-center">
          <p className="text-gray-500 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1 sm:mb-2">
            Profit Factor
          </p>
          <h2 className="text-2xl sm:text-3xl xl:text-4xl font-black text-white tracking-tight">
            {profitFactor}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default StatsPanel;
