import React, { useState, useMemo } from "react";
import { LineChart, Line, ResponsiveContainer, YAxis } from "recharts";

const generateSparkline = (startPrice, volatility, trend) => {
  let currentPrice = startPrice;
  return Array.from({ length: 20 }).map((_, i) => {
    currentPrice = currentPrice + (Math.random() - 0.5) * volatility + trend;
    return { price: currentPrice };
  });
};

const marketData = {
  Forex: [
    {
      symbol: "EUR/USD",
      name: "Euro / US Dollar",
      price: 1.0845,
      change: 0.12,
      sparkline: generateSparkline(1.08, 0.002, 0.0005),
    },
    {
      symbol: "GBP/USD",
      name: "British Pound / US Dollar",
      price: 1.2673,
      change: -0.08,
      sparkline: generateSparkline(1.27, 0.003, -0.0002),
    },
    {
      symbol: "USD/JPY",
      name: "US Dollar / Japanese Yen",
      price: 151.42,
      change: 0.35,
      sparkline: generateSparkline(150, 0.5, 0.1),
    },
    {
      symbol: "AUD/USD",
      name: "Australian Dollar / US Dollar",
      price: 0.6541,
      change: 0.05,
      sparkline: generateSparkline(0.65, 0.002, 0),
    },
    {
      symbol: "USD/CAD",
      name: "US Dollar / Canadian Dollar",
      price: 1.3582,
      change: -0.15,
      sparkline: generateSparkline(1.36, 0.002, -0.0005),
    },
  ],
  Crypto: [
    {
      symbol: "BTC/USD",
      name: "Bitcoin",
      price: 64230.5,
      change: 2.45,
      sparkline: generateSparkline(62000, 500, 100),
    },
    {
      symbol: "ETH/USD",
      name: "Ethereum",
      price: 3450.2,
      change: 1.85,
      sparkline: generateSparkline(3300, 30, 10),
    },
    {
      symbol: "SOL/USD",
      name: "Solana",
      price: 145.6,
      change: -0.5,
      sparkline: generateSparkline(148, 2, -0.2),
    },
  ],
  Indices: [
    {
      symbol: "US30",
      name: "Wall Street 30",
      price: 39150.2,
      change: 0.45,
      sparkline: generateSparkline(38900, 50, 10),
    },
    {
      symbol: "NAS100",
      name: "US Tech 100",
      price: 18230.75,
      change: 1.12,
      sparkline: generateSparkline(18000, 30, 15),
    },
    {
      symbol: "SPX500",
      name: "US 500",
      price: 5240.1,
      change: 0.75,
      sparkline: generateSparkline(5200, 10, 2),
    },
  ],
};

const WatchlistTable = () => {
  const [activeTab, setActiveTab] = useState("Forex");

  const activeData = useMemo(() => marketData[activeTab], [activeTab]);

  return (
    <div className="h-full bg-[#0a0a0a] border border-white/5 rounded-2xl sm:rounded-[2rem] shadow-2xl flex flex-col overflow-hidden">
      <div className="p-5 sm:p-6 border-b border-white/5">
        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
          Market Overview
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 mt-1 font-medium">
          Live quotes and 7-day trends.
        </p>

        <div className="flex items-center gap-2 mt-6 overflow-x-auto hide-scrollbar pb-1">
          {Object.keys(marketData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
                activeTab === tab
                  ? "bg-white/10 text-white"
                  : "bg-[#111] text-gray-500 hover:text-gray-300 hover:bg-white/5"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar">
        <table className="w-full text-left border-collapse min-w-125">
          <thead className="sticky top-0 z-10 bg-[#0a0a0a]/95 backdrop-blur-xl">
            <tr className="border-b border-white/10 text-gray-500">
              <th className="py-3 px-6 text-[10px] font-bold uppercase tracking-widest">
                Symbol
              </th>
              <th className="py-3 px-6 text-[10px] font-bold uppercase tracking-widest text-right">
                Price
              </th>
              <th className="py-3 px-6 text-[10px] font-bold uppercase tracking-widest text-right">
                24h Change
              </th>
              <th className="py-3 px-6 text-[10px] font-bold uppercase tracking-widest text-center w-32">
                7D Trend
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {activeData.map((asset) => {
              const isPositive = asset.change >= 0;
              const colorClass = isPositive
                ? "text-emerald-400"
                : "text-red-400";
              const strokeColor = isPositive ? "#10b981" : "#ef4444";

              return (
                <tr
                  key={asset.symbol}
                  className="hover:bg-white/2 transition-colors group cursor-pointer"
                >
                  <td className="py-3 sm:py-4 px-6">
                    <div className="flex flex-col">
                      <span className="font-bold text-white text-sm">
                        {asset.symbol}
                      </span>
                      <span className="text-[10px] text-gray-500 font-medium truncate w-32 sm:w-auto">
                        {asset.name}
                      </span>
                    </div>
                  </td>

                  <td className="py-3 sm:py-4 px-6 text-right font-mono font-bold text-sm text-gray-200">
                    {activeTab === "Crypto" && "$"}
                    {asset.price.toLocaleString(undefined, {
                      minimumFractionDigits: activeTab === "Forex" ? 4 : 2,
                    })}
                  </td>

                  <td className="py-3 sm:py-4 px-6 text-right">
                    <span
                      className={`inline-flex items-center justify-end font-mono font-black text-xs sm:text-sm ${colorClass}`}
                    >
                      {isPositive ? "+" : ""}
                      {asset.change}%
                    </span>
                  </td>

                  <td className="py-3 sm:py-4 px-6 w-32 h-14">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={asset.sparkline}>
                        <YAxis domain={["dataMin", "dataMax"]} hide />
                        <Line
                          type="monotone"
                          dataKey="price"
                          stroke={strokeColor}
                          strokeWidth={2}
                          dot={false}
                          isAnimationActive={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WatchlistTable;
