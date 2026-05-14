import React from "react";
import WatchlistTable from "../Components/market/WatchlistTable";
import EconomicCalendar from "../Components/market/EconomicCalendar";
import LiveFeed from "../Components/market/LiveFeed";

const Market = () => {
  return (
    <div className="w-full max-w-400 mx-auto pb-12 animate-in fade-in duration-500 h-full flex flex-col">
      <LiveFeed />
      <div className="my-6 sm:mb-8 shrink-0">
        <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          Market Terminal
        </h1>

        <p className="text-sm text-gray-500 mt-1 font-medium">
          Live data feeds and macroeconomic events.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-5 gap-6 sm:gap-8 flex-1 min-h-0">
        <div className="xl:col-span-2 h-125 xl:h-175">
          <WatchlistTable />
        </div>

        <div className="xl:col-span-3 h-125 xl:h-175">
          <EconomicCalendar />
        </div>
      </div>
    </div>
  );
};

export default Market;
