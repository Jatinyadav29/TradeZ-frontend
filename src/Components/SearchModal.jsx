import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const searchData = [
  {
    id: 1,
    category: "Pages",
    title: "Dashboard",
    url: "/app/dashboard",
    icon: "📊",
  },
  {
    id: 2,
    category: "Pages",
    title: "Trade History",
    url: "/app/trades",
    icon: "📓",
  },
  {
    id: 3,
    category: "Pages",
    title: "Market Terminal",
    url: "/app/market",
    icon: "📈",
  },
  {
    id: 4,
    category: "Assets",
    title: "EUR/USD",
    url: "/app/market?asset=eurusd",
    icon: "🇪🇺",
    subtext: "Euro / US Dollar",
  },
  {
    id: 5,
    category: "Assets",
    title: "XAU/USD",
    url: "/app/market?asset=xauusd",
    icon: "🥇",
    subtext: "Gold",
  },
  {
    id: 6,
    category: "Assets",
    title: "US30",
    url: "/app/market?asset=us30",
    icon: "🇺🇸",
    subtext: "Wall Street 30",
  },
  {
    id: 7,
    category: "Assets",
    title: "BTC/USD",
    url: "/app/market?asset=btcusd",
    icon: "₿",
    subtext: "Bitcoin",
  },
  {
    id: 8,
    category: "Actions",
    title: "Connect Broker (MT4/MT5)",
    url: "/settings/broker",
    icon: "🔌",
  },
  {
    id: 9,
    category: "Actions",
    title: "Account Settings",
    url: "/settings",
    icon: "⚙️",
  },
  {
    id: 10,
    category: "Actions",
    title: "Deposit Capital",
    url: "/funding",
    icon: "💳",
  },
];

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100);
      setQuery("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const filteredResults = searchData.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      (item.subtext &&
        item.subtext.toLowerCase().includes(query.toLowerCase())),
  );

  const groupedResults = filteredResults.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="fixed inset-0 z-100 flex items-start justify-center pt-24 sm:pt-32 px-4">
      <div
        className="absolute inset-0 bg-[#050505]/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center px-4 py-4 border-b border-white/10 bg-white/2">
          <svg
            className="w-6 h-6 text-emerald-500 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search assets, pages, or actions..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent border-none px-4 text-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-0"
          />
          <button
            onClick={onClose}
            className="flex items-center justify-center px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] font-bold text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            ESC
          </button>
        </div>

        <div className="max-h-[60vh] sm:max-h-100 overflow-y-auto hide-scrollbar p-2">
          {filteredResults.length === 0 ? (
            <div className="py-14 text-center">
              <p className="text-sm font-bold text-gray-500">
                No results found for "{query}"
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Try searching for "EUR/USD" or "Dashboard"
              </p>
            </div>
          ) : (
            Object.keys(groupedResults).map((category) => (
              <div key={category} className="mb-4 last:mb-0">
                <div className="px-3 py-2 text-[10px] font-black uppercase tracking-widest text-emerald-500/70">
                  {category}
                </div>
                <div className="flex flex-col gap-1">
                  {groupedResults[category].map((item) => (
                    <Link
                      key={item.id}
                      to={item.url}
                      onClick={onClose}
                      className="flex items-center justify-between px-3 py-3 rounded-xl hover:bg-white/4 border border-transparent hover:border-white/5 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#111] border border-white/5 flex items-center justify-center text-lg shadow-inner group-hover:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-gray-200 group-hover:text-emerald-400 transition-colors">
                            {item.title}
                          </span>
                          {item.subtext && (
                            <span className="text-[10px] font-medium text-gray-500">
                              {item.subtext}
                            </span>
                          )}
                        </div>
                      </div>
                      <svg
                        className="w-4 h-4 text-gray-600 group-hover:text-emerald-400 transition-colors opacity-0 group-hover:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
