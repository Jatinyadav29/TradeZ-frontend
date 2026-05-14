import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const marketData = [
  {
    symbol: "NVDA",
    name: "NVIDIA Corporation",
    price: 898.78,
    change: 12.45,
    changePercent: 1.41,
    isUp: true,
    volume: 42501500,
  },
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: 183.05,
    change: -1.25,
    changePercent: -0.68,
    isUp: false,
    volume: 52404200,
  },
  {
    symbol: "TSLA",
    name: "Tesla, Inc.",
    price: 171.05,
    change: 3.42,
    changePercent: 2.04,
    isUp: true,
    volume: 88502000,
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corp",
    price: 420.55,
    change: -2.15,
    changePercent: -0.51,
    isUp: false,
    volume: 18504000,
  },
  {
    symbol: "AMD",
    name: "Advanced Micro Devices",
    price: 155.3,
    change: 4.12,
    changePercent: 2.72,
    isUp: true,
    volume: 64205000,
  },
  {
    symbol: "META",
    name: "Meta Platforms Inc.",
    price: 474.9,
    change: -5.3,
    changePercent: -1.1,
    isUp: false,
    volume: 12850100,
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    price: 167.25,
    change: 0.85,
    changePercent: 0.51,
    isUp: true,
    volume: 22405000,
  },
];

const LiveFeed = () => {
  const tickerRef = useRef(null);

  useGSAP(() => {
    gsap.to(tickerRef.current, {
      xPercent: -50,
      repeat: -1,
      duration: 25,
      ease: "none",
    });
  });
  return (
    <div className="w-full bg-white/5 backdrop-blur-md border-b border-white/10 overflow-hidden py-3 z-50">
      <div ref={tickerRef} className="flex w-max whitespace-nowrap">
        {[...marketData, ...marketData].map((stock, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 px-8 text-sm md:text-base tracking-wider
              ${stock.isUp ? "text-emerald-400" : "text-red-500"}
            `}
          >
            <span className="text-white">{stock.symbol}</span>

            <span>{stock.price}</span>
            <span>
              {stock.isUp ? "↑" : "↓"} ({stock.change})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveFeed;
