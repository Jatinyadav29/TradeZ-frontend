import React from "react";
import { useSelector } from "react-redux";
import TradesAnalytics from "../Components/trades/TradesAnalytics";
import MasterDataTable from "../Components/trades/MasterDataTable";

const Trades = () => {
  const { trades, startingBalance } = useSelector((state) => state.trades);

  return (
    <div className="w-full max-w-400 mx-auto pb-12 animate-in fade-in duration-500">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          Trade History
        </h1>
        <p className="text-sm text-gray-500 mt-1 font-medium">
          Review, analyze, and journal your past executions.
        </p>
      </div>

      <TradesAnalytics trades={trades} startingBalance={startingBalance} />

      <div className="bg-[#0a0a0a] border border-white/5 rounded-t-2xl sm:rounded-t-[2rem] p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-b-0 relative z-10">
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <div className="relative w-full sm:w-64 group">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-emerald-500 transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search ticker, side..."
              className="w-full bg-[#111] border border-white/10 rounded-lg py-2 sm:py-2.5 pl-10 pr-4 text-xs sm:text-sm text-gray-200 focus:outline-none focus:border-emerald-500/50 transition-colors placeholder:text-gray-600"
            />
          </div>
          <span className="hidden lg:block text-xs font-medium text-gray-500 shrink-0">
            Showing {trades.length} of {trades.length} executions
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 hide-scrollbar">
          <button className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-[#111] border border-white/10 hover:bg-white/5 rounded-lg text-xs sm:text-sm font-bold text-gray-300 transition-colors shrink-0">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            Filters
          </button>

          <button className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-[#111] border border-white/10 hover:bg-white/5 rounded-lg text-xs sm:text-sm font-bold text-gray-300 transition-colors shrink-0">
            Connect MT4/MT5
          </button>

          <button className="flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black rounded-lg text-xs sm:text-sm font-black transition-colors shadow-[0_0_15px_rgba(16,185,129,0.2)] shrink-0">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add Trade
          </button>
        </div>
      </div>

      <div className="bg-[#0a0a0a] border border-white/5 border-t-0 rounded-b-2xl sm:rounded-b-[2rem] p-6 text-center text-gray-500 min-h-100 flex items-center justify-center">
        <MasterDataTable trades={trades} />
      </div>
    </div>
  );
};

export default Trades;
