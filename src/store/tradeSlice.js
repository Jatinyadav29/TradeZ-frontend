import { createSlice } from "@reduxjs/toolkit";

const generateMockTrades = () => {
  const trades = [];
  const currentDate = new Date("2026-02-10T09:30:00Z");

  for (let i = 0; i < 60; i++) {
    currentDate.setDate(
      currentDate.getDate() + Math.floor(Math.random() * 2) + 1,
    );

    const isWin = Math.random() > 0.35;

    const pnl = isWin
      ? Math.floor(Math.random() * 600) + 400
      : -(Math.floor(Math.random() * 300) + 200);

    const assets = [
      "NVDA",
      "EUR/USD",
      "BTC/USD",
      "AAPL",
      "TSLA",
      "US30",
      "GBP/JPY",
      "GOLD",
    ];
    const asset = assets[Math.floor(Math.random() * assets.length)];

    trades.unshift({
      id: `trd_${60 - i}`,
      asset: asset,
      type: Math.random() > 0.5 ? "Long" : "Short",
      entry: (Math.random() * 1000 + 100).toFixed(2),
      exit: (Math.random() * 1000 + 100).toFixed(2),
      pnl: pnl,
      status: isWin ? "Win" : "Loss",
      date: new Date(currentDate).toISOString(),
    });
  }
  return trades;
};

const generatedTrades = generateMockTrades();

const startingBal = 100000;
const finalBalance =
  startingBal + generatedTrades.reduce((sum, t) => sum + t.pnl, 0);

const initialState = {
  accountBalance: finalBalance,
  startingBalance: startingBal,
  tradingDays: 42,
  dailyLossLimit: 5000,
  currentDailyLoss: 1250,
  maxLossLimit: 10000,
  leaderboard: [
    {
      rank: 1,
      name: "Alex C.",
      roi: "+42.5%",
      winRate: "78%",
      avatar: "https://i.pravatar.cc/150?img=11",
    },
    {
      rank: 2,
      name: "Sarah M.",
      roi: "+38.2%",
      winRate: "71%",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
      rank: 3,
      name: "Jatin Y.",
      roi: "+24.8%",
      winRate: "82%",
      avatar: "https://i.pravatar.cc/150?img=14",
    },
    {
      rank: 4,
      name: "David K.",
      roi: "+19.1%",
      winRate: "65%",
      avatar: "https://i.pravatar.cc/150?img=8",
    },
    {
      rank: 5,
      name: "Emma W.",
      roi: "+15.4%",
      winRate: "68%",
      avatar: "https://i.pravatar.cc/150?img=9",
    },
  ],
  trades: generatedTrades,
};

const tradeSlice = createSlice({
  name: "trades",
  initialState,
  reducers: {},
});

export default tradeSlice.reducer;
