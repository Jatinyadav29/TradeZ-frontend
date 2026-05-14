import React, { useMemo } from "react";
import {
  AreaChart,
  Area,
  YAxis,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Cell,
} from "recharts";

const TradesAnalytics = ({ trades, startingBalance }) => {
  const analyticsData = useMemo(() => {
    if (!trades || trades.length === 0)
      return { chartData: [], assetPerformance: [] };

    let runningBalance = startingBalance;
    const reversedTrades = [...trades].reverse();
    const chartData = [{ name: "Start", balance: startingBalance, pnl: 0 }];

    reversedTrades.forEach((trade, index) => {
      runningBalance += trade.pnl;
      chartData.push({
        name: `Trade ${index + 1}`,
        balance: runningBalance,
        pnl: trade.pnl,
        asset: trade.asset,
      });
    });

    const assetPnl = {};
    trades.forEach((trade) => {
      assetPnl[trade.asset] = (assetPnl[trade.asset] || 0) + trade.pnl;
    });

    const assetPerformance = Object.keys(assetPnl)
      .map((key) => ({
        asset: key,
        pnl: assetPnl[key],
      }))
      .sort((a, b) => b.pnl - a.pnl)
      .slice(0, 5);

    return { chartData, assetPerformance };
  }, [trades, startingBalance]);

  const CustomMiniTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const isPositive = data.pnl >= 0;
      return (
        <div className="bg-[#111]/95 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-2xl z-50">
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-1">
            {data.name} {data.asset && `• ${data.asset}`}
          </p>
          <p className="text-white font-black text-sm">
            $
            {payload[0].value.toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}
          </p>
          {data.pnl !== 0 && (
            <p
              className={`text-[10px] font-bold mt-0.5 ${isPositive ? "text-emerald-400" : "text-red-400"}`}
            >
              {isPositive ? "+" : "-"}${Math.abs(data.pnl).toFixed(2)}
            </p>
          )}
        </div>
      );
    }
    return null;
  };

  const CustomBarTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const isPositive = data.pnl >= 0;
      return (
        <div className="bg-[#111]/95 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-2xl z-50">
          <p className="text-white font-bold text-xs mb-1">
            {data.asset} Net P&L
          </p>
          <p
            className={`text-sm font-black ${isPositive ? "text-emerald-400" : "text-red-400"}`}
          >
            {isPositive ? "+" : "-"}${Math.abs(data.pnl).toFixed(2)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
      <div className="xl:col-span-2 bg-[#0a0a0a] border border-white/5 rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-900/10 blur-[80px] pointer-events-none group-hover:bg-emerald-900/20 transition-colors duration-1000"></div>

        <div className="relative z-10 flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-black text-white tracking-tight">
              Recent Equity Trend
            </h3>
            <p className="text-[10px] sm:text-xs text-gray-500 mt-1 font-medium">
              Performance over the last {trades.length} trades
            </p>
          </div>
          <span className="bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-2 py-0.5 rounded text-[10px] font-bold uppercase flex items-center gap-1.5 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Live
          </span>
        </div>

        <div className="flex-1 w-full min-h-40 sm:min-h-50 -ml-2 sm:ml-0">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={analyticsData.chartData}>
              <defs>
                <linearGradient
                  id="colorMiniBalance"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <YAxis domain={["dataMin - 500", "dataMax + 500"]} hide />
              <RechartsTooltip
                content={<CustomMiniTooltip />}
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
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorMiniBalance)"
                activeDot={{
                  r: 4,
                  fill: "#050505",
                  stroke: "#10b981",
                  strokeWidth: 2,
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="xl:col-span-1 bg-[#0a0a0a] border border-white/5 rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col">
        <div className="mb-4">
          <h3 className="text-lg font-black text-white tracking-tight">
            Asset Performance
          </h3>
          <p className="text-[10px] sm:text-xs text-gray-500 mt-1 font-medium">
            Net P&L by instrument
          </p>
        </div>

        <div className="flex-1 w-full min-h-45 sm:min-h-50">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={analyticsData.assetPerformance}
              layout="vertical"
              margin={{ top: 0, right: 20, left: 20, bottom: 0 }}
            >
              <XAxis type="number" hide />
              <YAxis
                dataKey="asset"
                type="category"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9ca3af", fontSize: 10, fontWeight: "bold" }}
                width={60}
              />
              <RechartsTooltip
                content={<CustomBarTooltip />}
                cursor={{ fill: "#ffffff05" }}
              />
              <Bar dataKey="pnl" radius={[0, 4, 4, 0]} barSize={20}>
                {analyticsData.assetPerformance.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.pnl >= 0 ? "#10b981" : "#ef4444"}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default TradesAnalytics;
