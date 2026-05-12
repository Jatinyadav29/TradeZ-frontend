import React, { useState, useMemo } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const PerformanceChart = ({ chartData }) => {
  const [activeRange, setActiveRange] = useState("ALL");

  const filteredData = useMemo(() => {
    if (!chartData || chartData.length === 0) return [];

    switch (activeRange) {
      case "1W":
        return chartData.slice(-7);
      case "1M":
        return chartData.slice(-15);
      case "3M":
        return chartData.slice(-45);
      case "ALL":
      default:
        return chartData;
    }
  }, [activeRange, chartData]);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const isPositive = payload[0].payload.pnl >= 0;
      return (
        <div className="bg-[#111]/90 backdrop-blur-md border border-white/10 p-3 sm:p-4 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] transform transition-all z-50">
          <p className="text-gray-400 text-[10px] sm:text-xs font-medium mb-1.5 uppercase tracking-wider">
            {label}
          </p>
          <div className="flex flex-col gap-0.5">
            <span className="text-white font-extrabold text-base sm:text-lg">
              $
              {payload[0].value.toLocaleString(undefined, {
                minimumFractionDigits: 2,
              })}
            </span>
            {payload[0].payload.pnl !== 0 && (
              <span
                className={`text-[10px] sm:text-xs font-bold ${isPositive ? "text-emerald-400" : "text-red-400"}`}
              >
                {isPositive ? "+" : "-"}$
                {Math.abs(payload[0].payload.pnl).toFixed(2)} Session P&L
              </span>
            )}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-full bg-[#0a0a0a] border border-white/5 rounded-2xl sm:rounded-[2rem] p-4 sm:p-6 lg:p-8 shadow-2xl relative overflow-hidden group flex flex-col">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent pointer-events-none blur-3xl z-0 transition-opacity duration-1000 opacity-50 group-hover:opacity-100"></div>

      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
        <div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Performance Overview
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1 font-medium">
            Cumulative equity curve over time
          </p>
        </div>

        <div className="flex items-center bg-[#111] border border-white/10 rounded-lg p-1 w-full sm:w-auto justify-between sm:justify-start">
          {["1W", "1M", "3M", "ALL"].map((range) => (
            <button
              key={range}
              onClick={() => setActiveRange(range)}
              className={`flex-1 sm:flex-none px-4 py-1.5 text-xs font-bold rounded-md transition-all duration-300 ${
                activeRange === range
                  ? "bg-white/10 text-white shadow-sm scale-100"
                  : "text-gray-500 hover:text-gray-300 hover:bg-white/5 scale-95 hover:scale-100"
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 w-full -ml-4 sm:ml-0 min-h-62.5 sm:min-h-75">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={filteredData}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#ffffff05"
              vertical={false}
            />
            <XAxis
              dataKey="date"
              stroke="#4b5563"
              fontSize={10}
              tickLine={false}
              axisLine={false}
              minTickGap={20}
              dy={10}
            />
            <YAxis
              domain={["auto", "auto"]}
              stroke="#4b5563"
              fontSize={10}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${(value / 1000).toFixed(1)}k`}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke: "#ffffff20",
                strokeWidth: 1,
                strokeDasharray: "3 3",
              }}
            />
            <Area
              type="monotone"
              dataKey="balance"
              stroke="#10b981"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorBalance)"
              animationDuration={800}
              activeDot={{
                r: 6,
                fill: "#050505",
                stroke: "#10b981",
                strokeWidth: 3,
                className: "animate-pulse",
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PerformanceChart;
