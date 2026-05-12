import React from "react";

const TradingObjectives = ({
  dailyLossLimit,
  currentDailyLoss,
  maxLossLimit,
}) => {
  const dailyLossPct = Math.min(
    (currentDailyLoss / dailyLossLimit) * 100,
    100,
  ).toFixed(1);

  const maxLossPct = 5.0;

  return (
    <div className="h-full bg-[#0a0a0a] border border-white/5 rounded-2xl sm:rounded-[2rem] p-5 sm:p-6 lg:p-8 shadow-2xl flex flex-col justify-between">
      <div className="mb-6 sm:mb-8">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Trading Objectives
          </h3>
          <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2.5 py-1 rounded text-[10px] sm:text-xs font-bold uppercase tracking-widest shrink-0">
            Phase 2
          </span>
        </div>
        <p className="text-xs sm:text-sm text-gray-500 font-medium">
          Maintain strict risk management to stay funded.
        </p>
      </div>

      <div className="flex flex-col gap-6 sm:gap-8 flex-1 justify-center">
        <div>
          <div className="flex justify-between items-end mb-2 sm:mb-3">
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold text-white mb-0.5">
                Daily Loss Limit
              </span>
              <span className="text-[10px] sm:text-xs text-gray-500 font-medium uppercase tracking-wider">
                Max allowed: ${dailyLossLimit.toLocaleString()}
              </span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-sm sm:text-base font-black text-red-400">
                ${currentDailyLoss.toLocaleString()}
              </span>
              <span className="text-[10px] sm:text-xs text-gray-500 font-medium">
                {dailyLossPct}% used
              </span>
            </div>
          </div>
          <div className="h-2.5 sm:h-3 w-full bg-[#111] rounded-full overflow-hidden border border-white/5">
            <div
              className="h-full bg-red-500 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${dailyLossPct}%` }}
            ></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-end mb-2 sm:mb-3">
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold text-white mb-0.5">
                Max Overall Loss
              </span>
              <span className="text-[10px] sm:text-xs text-gray-500 font-medium uppercase tracking-wider">
                Max allowed: ${maxLossLimit.toLocaleString()}
              </span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-sm sm:text-base font-black text-emerald-400">
                Safe
              </span>
              <span className="text-[10px] sm:text-xs text-gray-500 font-medium">
                {maxLossPct}% used
              </span>
            </div>
          </div>
          <div className="h-2.5 sm:h-3 w-full bg-[#111] rounded-full overflow-hidden border border-white/5">
            <div
              className="h-full bg-emerald-500 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${maxLossPct}%` }}
            ></div>
          </div>
        </div>
      </div>

      <button className="w-full mt-6 sm:mt-8 py-3 sm:py-3.5 rounded-xl border border-white/10 bg-white/2 text-xs sm:text-sm font-bold text-gray-300 hover:bg-white/5 hover:text-white transition-all active:scale-[0.98]">
        View Deep Analytics
      </button>
    </div>
  );
};

export default TradingObjectives;
