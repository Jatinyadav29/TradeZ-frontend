import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import NotificationDropdown from "./Notification/NotificationDropdown";
import SearchModal from "./SearchModal";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <nav className="relative w-full h-16 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md flex items-center justify-between px-4 md:px-6 z-50">
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <div className="flex items-center gap-3 z-20">
        <div className="font-bold text-xl md:text-2xl tracking-tighter text-white">
          <Link to="/">
            Trade<span className="text-emerald-500">Z</span>
          </Link>
        </div>
        <span className="hidden md:flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold text-orange-500 bg-orange-500/10 border border-orange-500/20 rounded">
          BETA
        </span>
      </div>

      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 text-sm font-medium text-gray-400 z-10">
        <a href="#features" className="hover:text-white transition-colors">
          Features
        </a>
        <a href="#pricing" className="hover:text-white transition-colors">
          Pricing
        </a>
        <a href="#reviews" className="hover:text-white transition-colors">
          Reviews
        </a>
        <a href="#faq" className="hover:text-white transition-colors">
          FAQs
        </a>
      </div>

      <div className="flex items-center gap-3 md:gap-4 z-20">
        <button
          onClick={() => setIsSearchOpen(true)}
          className="hidden lg:flex relative w-56 items-center bg-white/5 border border-white/5 hover:border-emerald-500/30 hover:bg-white/10 rounded-full py-1.5 px-3 transition-all group"
        >
          <svg
            className="w-4 h-4 text-gray-500 group-hover:text-emerald-400 transition-colors mr-2"
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
          <span className="text-sm text-gray-500 flex-1 text-left">
            Search...
          </span>
          <span className="flex items-center justify-center px-1.5 py-0.5 rounded-md bg-[#111] border border-white/10 text-[9px] font-bold text-gray-400 tracking-widest">
            Ctrl + K
          </span>
        </button>

        <SignedIn>
          <Link
            to="/app/dashboard"
            className="hidden md:flex items-center justify-center px-4 py-1.5 text-sm font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 rounded-full transition-all mr-2"
          >
            Go to Dashboard
          </Link>

          <div className="relative flex items-center ml-1">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors relative"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="absolute top-1.5 right-2 w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
            </button>

            <NotificationDropdown
              isOpen={showNotifications}
              onClose={() => setShowNotifications(false)}
            />
          </div>

          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center overflow-hidden hover:border-emerald-500/50 transition-colors">
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
        </SignedIn>

        <SignedOut>
          <Link
            to="/sign-in"
            className="hidden md:flex items-center justify-center px-4 py-1.5 text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Sign In
          </Link>
          <Link
            to="/sign-up"
            className="flex items-center justify-center px-4 py-1.5 text-sm font-bold text-black bg-emerald-500 hover:bg-emerald-400 rounded-full transition-all shadow-[0_0_10px_rgba(16,185,129,0.3)]"
          >
            Get Started
          </Link>
        </SignedOut>

        <div className="flex items-center lg:hidden gap-1 ml-2">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition-colors"
          >
            <svg
              className="w-5 h-5"
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
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#050505]/95 backdrop-blur-xl border-b border-white/10 lg:hidden flex flex-col z-40 shadow-2xl">
          <div className="flex flex-col px-6 py-6 gap-6 text-sm font-medium text-gray-300">
            <a
              href="#features"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-white hover:pl-2 transition-all"
            >
              Features
            </a>
            <a
              href="#pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-white hover:pl-2 transition-all"
            >
              Pricing
            </a>
            <a
              href="#reviews"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-white hover:pl-2 transition-all"
            >
              Reviews
            </a>
            <a
              href="#faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-white hover:pl-2 transition-all"
            >
              FAQs
            </a>

            <SignedOut>
              <div className="w-full border-t border-white/10 my-2"></div>
              <Link
                to="/sign-in"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-white transition-all"
              >
                Sign In
              </Link>
              <Link
                to="/sign-up"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-emerald-400 font-bold transition-all"
              >
                Get Started Free
              </Link>
            </SignedOut>

            <SignedIn>
              <div className="w-full border-t border-white/10 my-2"></div>
              <Link
                to="/app/dashboard"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-emerald-400 font-bold transition-all"
              >
                Go to Dashboard
              </Link>
            </SignedIn>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
