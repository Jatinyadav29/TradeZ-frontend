import React, { useState } from "react";

const chartData = {
  "1D": {
    data: [40, 42, 38, 45, 48, 46, 52, 50, 58, 62, 60, 68],
    return: "+1.24%",
    price: "24120.50",
  },
  "1W": {
    data: [30, 35, 32, 40, 45, 42, 50, 55, 52, 60, 65, 70],
    return: "+4.12%",
    price: "24800.10",
  },
  "1M": {
    data: [20, 25, 22, 30, 35, 38, 35, 42, 48, 45, 55, 60],
    return: "+8.45%",
    price: "25450.00",
  },
  "1Y": {
    data: [10, 15, 12, 20, 25, 22, 30, 40, 35, 50, 65, 80],
    return: "+24.80%",
    price: "28900.75",
  },
};

const InteractiveMockup = () => {
  const [activeTimeframe, setActiveTimeframe] = useState("1M");
  const [hoverIndex, setHoverIndex] = useState(null);

  const currentData = chartData[activeTimeframe];
  const points = currentData.data;

  const width = 400;
  const height = 150;
  const maxPoint = Math.max(...points);
  const minPoint = Math.min(...points);

  const normalizeY = (val) =>
    height - ((val - minPoint) / (maxPoint - minPoint)) * (height - 20) - 10;
  const normalizeX = (index) => (index / (points.length - 1)) * width;

  const linePath = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${normalizeX(i)} ${normalizeY(p)}`)
    .join(" ");
  const areaPath = `${linePath} L ${width} ${height} L 0 ${height} Z`;

  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX || (e.touches && e.touches[0].clientX);
    if (!x) return;

    const relativeX = x - rect.left;
    const percentage = Math.max(0, Math.min(1, relativeX / rect.width));
    const index = Math.round(percentage * (points.length - 1));
    setHoverIndex(index);
  };

  const getTooltipValue = () => {
    if (hoverIndex === null) return "";
    const basePrice = parseFloat(currentData.price);
    const pointRatio = points[hoverIndex] / points[points.length - 1];
    const calculatedPrice = basePrice * pointRatio;
    return calculatedPrice.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <div className="relative w-full max-w-md mx-auto p-5 sm:p-6 rounded-3xl bg-[#0a0a0a]/90 border-t border-white/20 border-x border-b shadow-[0_0_50px_rgba(16,185,129,0.1)] backdrop-blur-xl transition-all">
      <div className="flex justify-between items-start mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
              <span className="text-emerald-500 text-xs font-bold">N50</span>
            </div>
            <h3 className="text-lg font-bold text-white tracking-tight">
              Nifty 50
            </h3>
          </div>
          <p className="text-sm text-gray-400">Options Index</p>
        </div>
        <div className="text-right">
          <h2 className="text-xl sm:text-2xl font-extrabold text-white">
            ₹
            {parseFloat(currentData.price).toLocaleString("en-IN", {
              minimumFractionDigits: 2,
            })}
          </h2>
          <p className="text-emerald-400 font-semibold text-sm">
            {currentData.return}
          </p>
        </div>
      </div>

      <div
        className="relative w-full aspect-[2.2/1] mb-6 group cursor-crosshair touch-none"
        onPointerMove={handlePointerMove}
        onPointerLeave={() => setHoverIndex(null)}
      >
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-full overflow-visible"
        >
          <defs>
            <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d={areaPath}
            fill="url(#chartGradient)"
            className="transition-all duration-500 ease-out"
          />

          <path
            d={linePath}
            fill="none"
            stroke="#10B981"
            strokeWidth="3"
            filter="url(#glow)"
            className="transition-all duration-500 ease-out"
          />

          {hoverIndex !== null && (
            <g className="transition-opacity duration-200">
              <line
                x1={normalizeX(hoverIndex)}
                y1="0"
                x2={normalizeX(hoverIndex)}
                y2={height}
                stroke="#ffffff"
                strokeOpacity="0.3"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <circle
                cx={normalizeX(hoverIndex)}
                cy={normalizeY(points[hoverIndex])}
                r="4"
                fill="#050505"
                stroke="#10B981"
                strokeWidth="2.5"
                className="shadow-xl"
              />
            </g>
          )}
        </svg>

        {hoverIndex !== null && (
          <div
            className="absolute z-20 pointer-events-none transform -translate-x-1/2 -translate-y-full pb-3 transition-all duration-75 ease-out"
            style={{
              left: `${(hoverIndex / (points.length - 1)) * 100}%`,
              top: `${(normalizeY(points[hoverIndex]) / height) * 100}%`,
            }}
          >
            <div className="bg-[#111] border border-white/10 shadow-2xl rounded-lg px-3 py-1.5 flex flex-col items-center backdrop-blur-md">
              <span className="text-[10px] font-bold text-emerald-400 whitespace-nowrap">
                ₹{getTooltipValue()}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between bg-[#111] rounded-xl p-1.5 border border-white/5 shadow-inner">
        {["1D", "1W", "1M", "1Y"].map((tf) => (
          <button
            key={tf}
            onClick={() => setActiveTimeframe(tf)}
            className={`flex-1 py-1.5 text-xs sm:text-sm font-bold rounded-lg transition-all duration-300 ${
              activeTimeframe === tf
                ? "bg-emerald-500 text-black shadow-[0_2px_10px_rgba(16,185,129,0.3)] scale-100"
                : "text-gray-500 hover:text-white hover:bg-white/5 scale-95 hover:scale-100"
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
