import React from "react";

const MonthlyPnL = ({ calendarDays }) => {
  const maxPnL = Math.max(...calendarDays.map((d) => Math.abs(d.pnl)), 1);

  return (
    <div className="h-full bg-[#0a0a0a] border border-white/5 rounded-2xl sm:rounded-[2rem] p-4 sm:p-6 shadow-2xl flex flex-col">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div>
          <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
            Monthly P&L
          </h3>
          <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5 font-medium">
            Performance heatmap & daily breakdown
          </p>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 bg-[#111] border border-white/10 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2">
          <button className="text-gray-500 hover:text-white transition-colors p-1 active:scale-95">
            &lt;
          </button>
          <span className="text-white font-bold text-[11px] sm:text-sm whitespace-nowrap">
            May 2026
          </span>
          <button className="text-gray-500 hover:text-white transition-colors p-1 active:scale-95">
            &gt;
          </button>
        </div>
      </div>

      <div className="w-full border border-white/5 rounded-xl sm:rounded-2xl bg-[#111] flex-1 flex flex-col">
        <div className="grid grid-cols-7 border-b border-white/5 bg-white/5 rounded-t-xl sm:rounded-t-2xl">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
            <div
              key={day}
              className="py-2 sm:py-3 text-center text-[9px] sm:text-[11px] font-black text-gray-500 uppercase tracking-widest"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 flex-1 auto-rows-fr relative">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={`pad-${i}`}
              className="border-b border-r border-white/5 bg-[#0a0a0a]/50 min-h-14 sm:min-h-18 lg:min-h-20"
            ></div>
          ))}

          {calendarDays.map((date, index) => {
            const isWin = date.pnl > 0;
            const isLoss = date.pnl < 0;
            const hasData = date.hasTrades;

            const intensity = hasData
              ? Math.max(0.15, Math.abs(date.pnl) / maxPnL)
              : 0;
            const bgStyle = isWin
              ? { backgroundColor: `rgba(16, 185, 129, ${intensity * 0.4})` }
              : isLoss
                ? { backgroundColor: `rgba(239, 68, 68, ${intensity * 0.4})` }
                : {};

            const cellIndex = 4 + index;
            const dayOfWeek = cellIndex % 7;

            const isBottomLeft = cellIndex === 28;
            const isBottomRight = cellIndex === 34;
            const cornerClass = isBottomLeft
              ? "rounded-bl-xl sm:rounded-bl-2xl"
              : isBottomRight
                ? "rounded-br-xl sm:rounded-br-2xl"
                : "";

            let tooltipPosClass = "left-1/2 -translate-x-1/2 origin-bottom";
            if (dayOfWeek === 0) tooltipPosClass = "left-0 origin-bottom-left";
            if (dayOfWeek === 6)
              tooltipPosClass = "right-0 origin-bottom-right";

            return (
              <div
                key={date.day}
                tabIndex="0"
                className={`relative group border-b border-r border-white/5 min-h-14 sm:min-h-18 lg:min-h-20 flex flex-col justify-between p-1.5 sm:p-2 cursor-pointer transition-all duration-300 hover:z-20 focus:z-20 focus:outline-none ${cornerClass}`}
                style={bgStyle}
              >
                <span
                  className={`text-[10px] sm:text-xs font-mono leading-none ${hasData ? "text-white font-bold" : "text-gray-600"}`}
                >
                  {date.day}
                </span>

                {hasData && (
                  <div className="w-full flex justify-center pb-0.5 sm:pb-1">
                    <span
                      className={`font-black text-[9px] sm:text-xs truncate ${isWin ? "text-emerald-400" : "text-red-400"}`}
                    >
                      <span className="hidden sm:inline">
                        {isWin ? "+" : ""}
                      </span>
                      ${Math.abs(date.pnl).toFixed(0)}
                    </span>
                  </div>
                )}

                {hasData && (
                  <div
                    className={`absolute bottom-[110%] ${tooltipPosClass} mb-1 w-36 sm:w-44 bg-[#050505] border border-white/10 rounded-xl p-3 shadow-[0_15px_40px_rgba(0,0,0,0.8)] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus:opacity-100 group-focus:visible transition-all duration-200 z-50 pointer-events-none scale-95 group-hover:scale-100 group-focus:scale-100`}
                  >
                    <p className="text-gray-400 text-[9px] sm:text-[10px] uppercase tracking-widest font-bold mb-1.5">
                      May {date.day}, 2026
                    </p>
                    <p
                      className={`text-sm sm:text-lg font-black tracking-tight ${isWin ? "text-emerald-400" : "text-red-400"}`}
                    >
                      {isWin ? "+" : "-"}${Math.abs(date.pnl).toFixed(2)}
                    </p>

                    <div className="mt-2.5 pt-2.5 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[9px] sm:text-[10px] text-gray-500 font-medium">
                        Session
                      </span>
                      <span
                        className={`text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider ${isWin ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400"}`}
                      >
                        {isWin ? "Profit" : "Loss"}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MonthlyPnL;
