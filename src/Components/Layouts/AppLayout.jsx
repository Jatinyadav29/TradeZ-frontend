import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";

const navItems = [
  {
    name: "Dashboard",
    path: "/app/dashboard",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
        />
      </svg>
    ),
  },
  {
    name: "Trades",
    path: "/app/trades",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
  },
  {
    name: "Market",
    path: "/app/market",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
];

const AppLayout = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="h-screen w-full bg-[#050505] text-white flex overflow-hidden font-sans">
      <aside className="hidden xl:flex flex-col w-64 border-r border-white/5 bg-[#0a0a0a] z-30 shrink-0">
        <div className="h-16 flex items-center px-6 border-b border-white/5">
          <div className="font-bold text-xl tracking-tighter text-white">
            Trade<span className="text-emerald-500">Z</span>
          </div>
        </div>

        <nav className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `group flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 border ${
                  isActive
                    ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.05)]"
                    : "border-transparent text-gray-400 hover:bg-white/5 hover:text-white hover:border-white/10"
                }`
              }
            >
              <span className="transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </span>
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5">
          <div className="p-4 rounded-xl bg-[#111] border border-white/5 flex flex-col gap-2">
            <span className="text-xs text-gray-500 font-mono">
              NY4 Server Status
            </span>
            <div className="flex items-center gap-2 text-sm text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Operational (8ms)
            </div>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0 relative h-full">
        <header className="h-16 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md flex items-center justify-between px-4 xl:px-8 z-20 shrink-0">
          <div className="flex items-center gap-4 xl:hidden">
            <button
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              className="p-2 text-gray-400 hover:text-white rounded-md transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <div className="font-bold text-lg tracking-tighter text-white">
              Trade<span className="text-emerald-500">Z</span>
            </div>
          </div>

          <div className="hidden xl:flex relative w-72 group">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-emerald-500 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search ticker (e.g., NVDA)..."
              className="w-full bg-[#111] border border-white/5 rounded-full py-2 pl-10 pr-4 text-sm text-gray-200 focus:outline-none focus:border-emerald-500/50 focus:bg-white/5 transition-all placeholder:text-gray-600"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 opacity-50 group-focus-within:opacity-0 transition-opacity pointer-events-none">
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-white/10 rounded border border-white/20">
                ⌘
              </kbd>
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-white/10 rounded border border-white/20">
                K
              </kbd>
            </div>
          </div>

          <div className="flex items-center gap-4 xl:gap-6 ml-auto xl:ml-0">
            <button className="relative text-gray-400 hover:text-white transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="absolute top-0 right-0 w-2 h-2 bg-emerald-500 rounded-full border-2 border-[#050505]"></span>
            </button>

            <div className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center hover:border-emerald-500/50 transition-colors">
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "w-full h-full",
                    userButtonPopoverCard:
                      "border border-white/10 bg-[#0a0a0a] shadow-2xl",
                  },
                }}
              />
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-8 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent pointer-events-none blur-3xl z-0"></div>

          <div className="relative z-10 h-full">
            <Outlet />
          </div>
        </main>
      </div>

      {isMobileNavOpen && (
        <div className="fixed inset-0 z-50 xl:hidden flex">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsMobileNavOpen(false)}
          ></div>

          <aside className="relative w-64 bg-[#0a0a0a] border-r border-white/5 flex flex-col h-full animate-in slide-in-from-left duration-300">
            <div className="h-16 flex items-center justify-between px-6 border-b border-white/5">
              <div className="font-bold text-xl tracking-tighter text-white">
                Trade<span className="text-emerald-500">Z</span>
              </div>
              <button
                onClick={() => setIsMobileNavOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav className="flex-1 py-6 px-4 space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileNavOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 border ${
                      isActive
                        ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                        : "border-transparent text-gray-400 hover:bg-white/5 hover:text-white hover:border-white/10"
                    }`
                  }
                >
                  {item.icon}
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </div>
  );
};

export default AppLayout;
