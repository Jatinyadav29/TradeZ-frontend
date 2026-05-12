import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import StatsPanel from "../components/dashboard/StatsPanel";
import PerformanceChart from "../components/dashboard/PerformanceChart";
import TradingObjectives from "../components/dashboard/TradingObjectives";
import MonthlyPnL from "../components/dashboard/MonthlyPnL";
import HallOfFame from "../components/dashboard/HallOfFame";
import OrderFlowPnL from "../components/dashboard/OrderFlowPnL";

const Dashboard = () => {
  const {
    trades,
    accountBalance,
    startingBalance,
    tradingDays,
    dailyLossLimit,
    currentDailyLoss,
    maxLossLimit,
    leaderboard,
  } = useSelector((state) => state.trades);

  const metrics = useMemo(() => {
    const totalTrades = trades.length;
    const winningTrades = trades.filter((t) => t.status === "Win");
    const losingTrades = trades.filter((t) => t.status === "Loss");

    const winRate =
      totalTrades > 0 ? (winningTrades.length / totalTrades) * 100 : 0;
    const grossProfit = winningTrades.reduce((acc, t) => acc + t.pnl, 0);
    const grossLoss = Math.abs(losingTrades.reduce((acc, t) => acc + t.pnl, 0));
    const profitFactor =
      grossLoss > 0 ? (grossProfit / grossLoss).toFixed(2) : "MAX";
    const totalPnL = accountBalance - startingBalance;
    const roi = ((totalPnL / startingBalance) * 100).toFixed(2);

    let runningBalance = startingBalance;
    const reversedTrades = [...trades].reverse();
    const chartData = [{ date: "Start", balance: startingBalance, pnl: 0 }];

    reversedTrades.forEach((trade) => {
      runningBalance += trade.pnl;
      chartData.push({
        date: new Date(trade.date).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        }),
        balance: runningBalance,
        pnl: trade.pnl,
      });
    });

    const daysInMonth = 31;
    const calendarDays = Array.from({ length: daysInMonth }, (_, i) => {
      const dayNum = i + 1;
      const dayTrades = trades.filter(
        (t) =>
          new Date(t.date).getDate() === dayNum &&
          new Date(t.date).getMonth() === 4,
      );
      const dayPnL = dayTrades.reduce((sum, t) => sum + t.pnl, 0);
      return { day: dayNum, pnl: dayPnL, hasTrades: dayTrades.length > 0 };
    });

    const recentExecutions = trades.slice(0, 8);
    const maxAbsPnl = Math.max(
      ...recentExecutions.map((t) => Math.abs(t.pnl)),
      1,
    );

    return {
      winRate,
      profitFactor,
      totalPnL,
      roi,
      chartData,
      calendarDays,
      recentExecutions,
      maxAbsPnl,
    };
  }, [trades, accountBalance, startingBalance]);

  return (
    <div className="w-full max-w-400 mx-auto space-y-6 sm:space-y-8 pb-12 animate-in fade-in duration-500">
      <StatsPanel
        accountBalance={accountBalance}
        totalPnL={metrics.totalPnL}
        roi={metrics.roi}
        winRate={metrics.winRate}
        tradesCount={trades.length}
        profitFactor={metrics.profitFactor}
      />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 h-full">
          <PerformanceChart chartData={metrics.chartData} />
        </div>
        <div className="xl:col-span-1 h-full">
          <TradingObjectives
            dailyLossLimit={dailyLossLimit}
            currentDailyLoss={currentDailyLoss}
            maxLossLimit={maxLossLimit}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 h-full">
          <MonthlyPnL calendarDays={metrics.calendarDays} />
        </div>
        <div className="xl:col-span-1 h-full">
          <HallOfFame leaderboard={leaderboard} />
        </div>
      </div>

      <OrderFlowPnL
        recentExecutions={metrics.recentExecutions}
        maxAbsPnl={metrics.maxAbsPnl}
      />
    </div>
  );
};

export default Dashboard;
