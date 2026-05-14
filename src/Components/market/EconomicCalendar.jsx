import React, { useState, useMemo } from "react";

const allEvents = [
  {
    id: 1,
    day: "Today",
    time: "08:30 AM",
    currency: "USD",
    country: "US",
    impact: "High",
    event: "Core Retail Sales (MoM)",
    actual: "0.4%",
    forecast: "0.2%",
    previous: "0.5%",
  },
  {
    id: 2,
    day: "Today",
    time: "08:30 AM",
    currency: "USD",
    country: "US",
    impact: "High",
    event: "Initial Jobless Claims",
    actual: "210K",
    forecast: "215K",
    previous: "211K",
  },
  {
    id: 3,
    day: "Today",
    time: "10:00 AM",
    currency: "USD",
    country: "US",
    impact: "Medium",
    event: "Business Inventories (MoM)",
    actual: "-",
    forecast: "0.3%",
    previous: "0.4%",
  },
  {
    id: 4,
    day: "Today",
    time: "01:00 PM",
    currency: "GBP",
    country: "GB",
    impact: "Low",
    event: "BoE Gov Bailey Speaks",
    actual: "-",
    forecast: "-",
    previous: "-",
  },
  {
    id: 5,
    day: "Today",
    time: "04:00 PM",
    currency: "NZD",
    country: "NZ",
    impact: "High",
    event: "RBNZ Interest Rate Decision",
    actual: "-",
    forecast: "5.50%",
    previous: "5.50%",
  },
  {
    id: 6,
    day: "Today",
    time: "09:30 PM",
    currency: "AUD",
    country: "AU",
    impact: "Medium",
    event: "Employment Change",
    actual: "-",
    forecast: "15.2K",
    previous: "116.5K",
  },

  {
    id: 7,
    day: "Tomorrow",
    time: "02:00 AM",
    currency: "GBP",
    country: "GB",
    impact: "High",
    event: "CPI (YoY)",
    actual: "-",
    forecast: "3.1%",
    previous: "3.4%",
  },
  {
    id: 8,
    day: "Tomorrow",
    time: "04:00 AM",
    currency: "EUR",
    country: "EU",
    impact: "High",
    event: "ECB Monetary Policy Statement",
    actual: "-",
    forecast: "-",
    previous: "-",
  },
  {
    id: 9,
    day: "Tomorrow",
    time: "04:45 AM",
    currency: "EUR",
    country: "EU",
    impact: "Medium",
    event: "ECB Press Conference",
    actual: "-",
    forecast: "-",
    previous: "-",
  },
  {
    id: 10,
    day: "Tomorrow",
    time: "08:30 AM",
    currency: "USD",
    country: "US",
    impact: "High",
    event: "PPI (MoM)",
    actual: "-",
    forecast: "0.3%",
    previous: "0.6%",
  },
  {
    id: 11,
    day: "Tomorrow",
    time: "10:00 AM",
    currency: "CAD",
    country: "CA",
    impact: "Medium",
    event: "Ivey PMI",
    actual: "-",
    forecast: "54.2",
    previous: "53.9",
  },

  {
    id: 12,
    day: "This Week",
    time: "01:30 AM",
    currency: "JPY",
    country: "JP",
    impact: "High",
    event: "BoJ Interest Rate Decision",
    actual: "-",
    forecast: "0.10%",
    previous: "0.10%",
  },
  {
    id: 13,
    day: "This Week",
    time: "02:00 AM",
    currency: "GBP",
    country: "GB",
    impact: "Medium",
    event: "Retail Sales (MoM)",
    actual: "-",
    forecast: "-0.3%",
    previous: "0.0%",
  },
  {
    id: 14,
    day: "This Week",
    time: "08:30 AM",
    currency: "USD",
    country: "US",
    impact: "High",
    event: "Core PCE Price Index (MoM)",
    actual: "-",
    forecast: "0.3%",
    previous: "0.4%",
  },
  {
    id: 15,
    day: "This Week",
    time: "08:30 AM",
    currency: "CAD",
    country: "CA",
    impact: "High",
    event: "GDP (MoM)",
    actual: "-",
    forecast: "0.1%",
    previous: "0.2%",
  },
  {
    id: 16,
    day: "This Week",
    time: "10:00 AM",
    currency: "USD",
    country: "US",
    impact: "Medium",
    event: "Revised UoM Consumer Sentiment",
    actual: "-",
    forecast: "76.5",
    previous: "76.5",
  },
];

const EconomicCalendar = () => {
  const [activeTime, setActiveTime] = useState("Today");

  const [activeImpacts, setActiveImpacts] = useState(
    new Set(["High", "Medium", "Low"]),
  );

  const toggleImpact = (impact) => {
    const newImpacts = new Set(activeImpacts);
    if (newImpacts.has(impact)) {
      newImpacts.delete(impact);
    } else {
      newImpacts.add(impact);
    }
    setActiveImpacts(newImpacts);
  };

  const filteredEvents = useMemo(() => {
    return allEvents.filter((ev) => {
      const matchesTime =
        activeTime === "All" ||
        ev.day === activeTime ||
        (activeTime === "This Week" &&
          ev.day !== "Today" &&
          ev.day !== "Tomorrow");
      const matchesImpact = activeImpacts.has(ev.impact);

      return matchesTime && matchesImpact;
    });
  }, [activeTime, activeImpacts]);

  const getImpactColor = (impact) => {
    switch (impact) {
      case "High":
        return "bg-red-500";
      case "Medium":
        return "bg-yellow-500";
      case "Low":
        return "bg-emerald-500";
      default:
        return "bg-gray-500";
    }
  };

  const getImpactBadgeStyle = (impact) => {
    switch (impact) {
      case "High":
        return "bg-red-500/10 text-red-400 border-red-500/20";
      case "Medium":
        return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
      case "Low":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

  return (
    <div className="h-full bg-[#0a0a0a] border border-white/5 rounded-2xl sm:rounded-[2rem] shadow-2xl flex flex-col overflow-hidden">
      <div className="p-5 sm:p-6 border-b border-white/5 shrink-0">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Economic Calendar
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 font-medium">
              Track high-impact events moving the markets.
            </p>
          </div>

          <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold text-gray-400 bg-[#111] border border-white/10 px-3 py-1.5 rounded-lg w-fit">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            GMT+5:30 (IST)
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6">
          <div className="flex bg-[#111] border border-white/10 rounded-lg p-1 w-full sm:w-auto overflow-x-auto hide-scrollbar">
            {["Today", "Tomorrow", "This Week", "All"].map((time) => (
              <button
                key={time}
                onClick={() => setActiveTime(time)}
                className={`flex-1 sm:flex-none px-3 sm:px-5 py-2 text-[10px] sm:text-xs font-bold rounded-md transition-all whitespace-nowrap ${
                  activeTime === time
                    ? "bg-white/10 text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                }`}
              >
                {time}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3 px-1 sm:px-4 sm:border-l border-white/10 overflow-x-auto hide-scrollbar pb-1 sm:pb-0">
            {["High", "Medium", "Low"].map((impact) => {
              const isActive = activeImpacts.has(impact);
              return (
                <button
                  key={impact}
                  onClick={() => toggleImpact(impact)}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all border ${
                    isActive
                      ? "bg-white/5 border-white/10 text-white shadow-sm"
                      : "bg-transparent border-transparent text-gray-600 hover:bg-white/5"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full transition-opacity ${getImpactColor(impact)} ${isActive ? "opacity-100" : "opacity-30"}`}
                  ></span>
                  {impact}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar p-2 sm:p-4 relative">
        {filteredEvents.length === 0 && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 p-6 text-center">
            <svg
              className="w-12 h-12 mb-3 opacity-30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <p className="font-bold text-sm">No events match your filters.</p>
            <p className="text-xs mt-1 opacity-70">
              Try adjusting the time or impact toggles above.
            </p>
          </div>
        )}

        <div className="flex flex-col gap-2">
          {filteredEvents.map((ev) => (
            <div
              key={ev.id}
              className="grid grid-cols-1 md:grid-cols-12 items-center gap-4 p-4 rounded-xl bg-transparent hover:bg-white/2 border border-transparent hover:border-white/5 transition-all group"
            >
              <div className="md:col-span-4 flex items-center gap-3 sm:gap-4">
                <span className="text-[10px] sm:text-xs font-bold text-gray-500 w-16 shrink-0">
                  {ev.time}
                </span>

                <div className="flex items-center gap-2 w-16 shrink-0">
                  <div className="w-5 h-5 rounded-sm bg-white/10 text-[8px] flex items-center justify-center font-bold text-white shrink-0">
                    {ev.country}
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-white">
                    {ev.currency}
                  </span>
                </div>

                <span
                  className={`px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-black uppercase tracking-widest w-16 text-center shrink-0 border ${getImpactBadgeStyle(ev.impact)}`}
                >
                  {ev.impact}
                </span>
              </div>

              <div className="md:col-span-4">
                <span className="text-xs sm:text-sm font-bold text-gray-200 group-hover:text-emerald-400 transition-colors cursor-pointer line-clamp-2 md:line-clamp-1">
                  {ev.event}
                </span>
              </div>

              <div className="md:col-span-4 grid grid-cols-3 gap-2 border-t border-white/5 md:border-t-0 pt-3 md:pt-0">
                <div className="flex flex-col md:items-end">
                  <span className="text-[9px] sm:text-[10px] text-gray-600 font-bold uppercase tracking-widest">
                    Actual
                  </span>
                  <span
                    className={`text-xs sm:text-sm font-mono font-bold ${ev.actual !== "-" ? "text-emerald-400" : "text-white"}`}
                  >
                    {ev.actual}
                  </span>
                </div>
                <div className="flex flex-col md:items-end">
                  <span className="text-[9px] sm:text-[10px] text-gray-600 font-bold uppercase tracking-widest">
                    Forecast
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-gray-400">
                    {ev.forecast}
                  </span>
                </div>
                <div className="flex flex-col md:items-end">
                  <span className="text-[9px] sm:text-[10px] text-gray-600 font-bold uppercase tracking-widest">
                    Previous
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-gray-400">
                    {ev.previous}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EconomicCalendar;
