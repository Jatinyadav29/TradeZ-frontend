import React, { useState } from "react";

const MasterDataTable = ({ trades }) => {
  const [expandedRows, setExpandedRows] = useState(new Set());

  const toggleRow = (id) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedRows(newExpanded);
  };

  if (!trades || trades.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-gray-500">
        <svg
          className="w-12 h-12 mb-4 opacity-50"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <p className="font-medium">No trading data available.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-h-150 overflow-y-auto overflow-x-hidden hide-scrollbar relative rounded-b-2xl sm:rounded-b-[2rem]">
      <table className="w-full text-left border-collapse">
        <thead className="sticky top-0 z-20 bg-[#0a0a0a]/95 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <tr className="border-b border-white/10 text-gray-500">
            <th className="py-3 sm:py-4 px-2 sm:px-6 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
              Asset
            </th>

            <th className="hidden sm:table-cell py-3 sm:py-4 px-2 sm:px-6 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
              Side
            </th>

            <th className="hidden md:table-cell py-3 sm:py-4 px-6 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
              Date / Time
            </th>
            <th className="hidden lg:table-cell py-3 sm:py-4 px-6 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
              Entry
            </th>
            <th className="hidden lg:table-cell py-3 sm:py-4 px-6 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
              Exit
            </th>

            <th className="py-3 sm:py-4 px-2 sm:px-6 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest whitespace-nowrap text-right">
              Net P&L
            </th>
            <th className="hidden sm:table-cell py-3 sm:py-4 px-6 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap text-center">
              Status
            </th>

            <th className="lg:hidden py-3 sm:py-4 px-2 sm:px-4 w-6 sm:w-8"></th>
          </tr>
        </thead>

        <tbody className="divide-y divide-white/5 bg-[#0a0a0a]">
          {trades.map((trade) => {
            const dateObj = new Date(trade.date);
            const dateStr = dateObj.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            });
            const timeStr = dateObj.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            });
            const isWin = trade.status === "Win";
            const isExpanded = expandedRows.has(trade.id);

            return (
              <React.Fragment key={trade.id}>
                <tr
                  onClick={() => toggleRow(trade.id)}
                  className={`group transition-colors lg:cursor-default ${isExpanded ? "bg-white/4" : "hover:bg-white/2 cursor-pointer"}`}
                >
                  <td className="py-2.5 sm:py-4 px-2 sm:px-6">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-[#111] border border-white/10 flex items-center justify-center font-bold text-[8px] sm:text-[10px] text-white group-hover:border-emerald-500/50 transition-colors shrink-0">
                        {trade.asset.substring(0, 2)}
                      </div>
                      <div className="flex flex-col sm:block">
                        <span className="font-bold text-white text-[11px] sm:text-sm leading-tight">
                          {trade.asset}
                        </span>
                        <span
                          className={`sm:hidden w-fit mt-0.5 px-1.5 py-0.5 rounded text-[7px] font-black uppercase tracking-wider ${
                            trade.type === "Long"
                              ? "bg-emerald-500/10 text-emerald-400"
                              : "bg-red-500/10 text-red-400"
                          }`}
                        >
                          {trade.type}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td className="hidden sm:table-cell py-3 sm:py-4 px-2 sm:px-6">
                    <span
                      className={`px-2 py-1 rounded text-[10px] font-black uppercase tracking-wider ${
                        trade.type === "Long"
                          ? "bg-emerald-500/10 text-emerald-400"
                          : "bg-red-500/10 text-red-400"
                      }`}
                    >
                      {trade.type}
                    </span>
                  </td>

                  <td className="hidden md:table-cell py-3 sm:py-4 px-6">
                    <div className="flex flex-col">
                      <span className="text-xs sm:text-sm font-bold text-gray-200">
                        {dateStr}
                      </span>
                      <span className="text-[10px] text-gray-500 font-mono mt-0.5">
                        {timeStr}
                      </span>
                    </div>
                  </td>

                  <td className="hidden lg:table-cell py-3 sm:py-4 px-6 text-xs sm:text-sm font-mono text-gray-400">
                    {trade.entry}
                  </td>
                  <td className="hidden lg:table-cell py-3 sm:py-4 px-6 text-xs sm:text-sm font-mono text-gray-400">
                    {trade.exit}
                  </td>

                  <td
                    className={`py-2.5 sm:py-4 px-2 sm:px-6 text-right text-[11px] sm:text-sm font-mono font-black ${isWin ? "text-emerald-400" : "text-red-400"}`}
                  >
                    {isWin ? "+" : "-"}${Math.abs(trade.pnl).toFixed(2)}
                  </td>

                  <td className="hidden sm:table-cell py-3 sm:py-4 px-6 text-center">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
                        isWin
                          ? "bg-emerald-500/5 text-emerald-500 border-emerald-500/20"
                          : "bg-red-500/5 text-red-500 border-red-500/20"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${isWin ? "bg-emerald-500" : "bg-red-500"}`}
                      ></span>
                      {trade.status}
                    </span>
                  </td>

                  <td className="lg:hidden py-2.5 sm:py-4 px-2 sm:px-4 text-right text-gray-500">
                    <svg
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 inline-block transition-transform duration-300 ${isExpanded ? "rotate-180 text-white" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </td>
                </tr>

                {isExpanded && (
                  <tr className="lg:hidden bg-[#111]/50 shadow-inner">
                    <td
                      colSpan="100%"
                      className="px-2 sm:px-4 py-3 sm:py-4 border-l-2 border-emerald-500/50"
                    >
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pl-1 sm:pl-2">
                        <div className="sm:hidden flex flex-col gap-0.5">
                          <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">
                            Status
                          </span>
                          <span
                            className={`font-black text-[11px] uppercase ${isWin ? "text-emerald-400" : "text-red-400"}`}
                          >
                            {trade.status}
                          </span>
                        </div>

                        <div className="md:hidden flex flex-col gap-0.5">
                          <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">
                            Execution Time
                          </span>
                          <span className="text-gray-300 text-[11px] sm:text-xs font-mono">
                            {dateStr} • {timeStr}
                          </span>
                        </div>

                        <div className="flex flex-col gap-0.5">
                          <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">
                            Entry Price
                          </span>
                          <span className="text-gray-300 text-[11px] sm:text-xs font-mono">
                            {trade.entry}
                          </span>
                        </div>

                        <div className="flex flex-col gap-0.5">
                          <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">
                            Exit Price
                          </span>
                          <span className="text-gray-300 text-[11px] sm:text-xs font-mono">
                            {trade.exit}
                          </span>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MasterDataTable;
