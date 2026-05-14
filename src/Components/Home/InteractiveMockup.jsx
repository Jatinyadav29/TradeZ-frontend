import React, { useState, useCallback, useRef } from "react";

const chartData = {
  "1D": {
    data: [100000, 100450, 100220, 101102, 100890, 101850],
    pnl: "+$1,850.00",
    winRate: "83%",
    trades: [
      { pair: "EUR/USD", side: "SHORT", pnl: "+$450.00" },
      { pair: "GBP/JPY", side: "LONG", pnl: "-$230.00" },
      { pair: "XAU/USD", side: "LONG", pnl: "+$882.00" },
      { pair: "USD/CAD", side: "SHORT", pnl: "-$212.00" },
      { pair: "EUR/GBP", side: "LONG", pnl: "+$960.00" },
    ],
  },
  "1M": {
    data: [98500, 99200, 100500, 102100, 101800, 103500, 105890],
    pnl: "+$7,390.00",
    winRate: "76%",
    trades: [
      { pair: "Week 1", side: "PROFIT", pnl: "+$1,200" },
      { pair: "Week 2", side: "PROFIT", pnl: "+$2,400" },
      { pair: "Week 3", side: "LOSS", pnl: "-$300" },
      { pair: "Week 4", side: "PROFIT", pnl: "+$1,800" },
      { pair: "Week 5", side: "PROFIT", pnl: "+$2,290" },
    ],
  },
};

const InteractiveMockup = () => {
  const [activeTimeframe, setActiveTimeframe] = useState("1D");
  const [hoverIndex, setHoverIndex] = useState(null);
  const containerRef = useRef(null);

  const currentData = chartData[activeTimeframe];
  const points = currentData.data;

  const width = 400;
  const height = 180;
  const maxPoint = Math.max(...points);
  const minPoint = Math.min(...points);
  const range = maxPoint - minPoint;

  const padding = range * 0.2;
  const yDomain = [minPoint - padding, maxPoint + padding];

  const normalizeY = (val) =>
    height - ((val - yDomain[0]) / (yDomain[1] - yDomain[0])) * height;
  const normalizeX = (index) => (index / (points.length - 1)) * width;

  const linePath = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${normalizeX(i)} ${normalizeY(p)}`)
    .join(" ");
  const areaPath = `${linePath} L ${width} ${height} L 0 ${height} Z`;

  const handlePointerMove = useCallback(
    (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
      const percentage = Math.max(0, Math.min(1, x / rect.width));
      const index = Math.round(percentage * (points.length - 1));
      setHoverIndex(index);
    },
    [points.length],
  );

  const getTooltipX = () => {
    if (hoverIndex === null) return "50%";
    const basePercent = (hoverIndex / (points.length - 1)) * 100;
    if (basePercent < 20) return "20%";
    if (basePercent > 80) return "80%";
    return `${basePercent}%`;
  };

  const tradeInfo =
    hoverIndex !== null
      ? currentData.trades[Math.min(hoverIndex, currentData.trades.length - 1)]
      : null;

  return (
    <div className="relative w-full max-w-85 mx-auto p-5 rounded-[2rem] bg-[#0a0a0a]/95 border border-white/10 shadow-2xl backdrop-blur-3xl transition-all overflow-hidden select-none">
      <div className="flex flex-col gap-4 mb-6 border-b border-white/5 pb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#111] border border-white/10 flex items-center justify-center p-2 shrink-0 shadow-inner">
            <img
              src="https://web-cdn.markets.com/trade_mt4_ea50bee548.png"
              alt="MT4"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <h3 className="text-base font-black text-white tracking-tight truncate">
                Broker Equity
              </h3>
              <span className="flex items-center gap-1 text-[8px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 shrink-0">
                <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span>
                SYNCED
              </span>
            </div>
            <p className="text-[9px] text-gray-500 font-mono tracking-widest uppercase truncate">
              Prop Evaluation • $100k
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/5 pt-4">
          <div className="text-left">
            <p className="text-[9px] text-gray-600 font-bold uppercase tracking-widest mb-0.5">
              Win Rate
            </p>
            <h4 className="text-sm font-black text-white">
              {currentData.winRate}
            </h4>
          </div>
          <div className="text-right">
            <p className="text-[9px] text-gray-600 font-bold uppercase tracking-widest mb-0.5">
              Net P&L
            </p>
            <h4 className="text-base font-black text-emerald-400">
              {currentData.pnl}
            </h4>
          </div>
        </div>
      </div>

      <div
        className="relative w-full aspect-2/1 mb-6 group cursor-crosshair touch-none overflow-visible"
        onPointerMove={handlePointerMove}
        onPointerLeave={() => setHoverIndex(null)}
      >
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-full overflow-visible"
        >
          <defs>
            <linearGradient id="mockupGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#10B981" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#10B981" stopOpacity={0} />
            </linearGradient>
            <filter id="chartGlow">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <path
            d={areaPath}
            fill="url(#mockupGradient)"
            className="transition-all duration-500"
          />
          <path
            d={linePath}
            fill="none"
            stroke="#10B981"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#chartGlow)"
            className="transition-all duration-500"
          />
          {hoverIndex !== null && (
            <g className="transition-opacity duration-200">
              <line
                x1={normalizeX(hoverIndex)}
                y1="0"
                x2={normalizeX(hoverIndex)}
                y2={height}
                stroke="#ffffff"
                strokeOpacity="0.1"
                strokeWidth="1.5"
              />
              <circle
                cx={normalizeX(hoverIndex)}
                cy={normalizeY(points[hoverIndex])}
                r="5"
                fill="#050505"
                stroke="#10B981"
                strokeWidth="3"
              />
            </g>
          )}
        </svg>

        {hoverIndex !== null && tradeInfo && (
          <div
            className="absolute z-20 pointer-events-none transform -translate-x-1/2 -translate-y-[calc(100%+16px)] transition-all duration-150 ease-out"
            style={{
              left: getTooltipX(),
              top: `${(normalizeY(points[hoverIndex]) / height) * 100}%`,
            }}
          >
            <div className="bg-[#111]/98 border border-white/10 shadow-2xl rounded-2xl p-3 backdrop-blur-xl w-36 ring-1 ring-white/5 animate-in fade-in zoom-in-95 duration-200">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-black text-white truncate pr-2">
                  {tradeInfo.pair}
                </span>
                <span
                  className={`text-[8px] font-black px-1.5 py-0.5 rounded shrink-0 ${
                    tradeInfo.side === "SHORT" ||
                    tradeInfo.side === "LOSS" ||
                    tradeInfo.side === "Week 3"
                      ? "bg-red-500/10 text-red-400"
                      : "bg-emerald-500/10 text-emerald-400"
                  }`}
                >
                  {tradeInfo.side}
                </span>
              </div>
              <div className="flex justify-between items-end border-t border-white/5 pt-2">
                <p className="text-[8px] text-gray-600 font-bold uppercase tracking-widest">
                  Result
                </p>
                <p
                  className={`text-xs font-mono font-black ${
                    tradeInfo.pnl.startsWith("+")
                      ? "text-emerald-400"
                      : "text-red-400"
                  }`}
                >
                  {tradeInfo.pnl}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between bg-[#111] rounded-xl p-1 border border-white/5 shadow-inner">
        {["1D", "1M"].map((tf) => (
          <button
            key={tf}
            onClick={() => setActiveTimeframe(tf)}
            className={`flex-1 py-2 text-[10px] font-black rounded-lg transition-all duration-300 ${
              activeTimeframe === tf
                ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/20"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            {tf}
          </button>
        ))}
      </div>
    </div>
  );
};

export default InteractiveMockup;
