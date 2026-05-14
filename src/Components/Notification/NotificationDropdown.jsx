import React from "react";

const notifications = [
  {
    id: 1,
    type: "news",
    title: "High Impact News",
    message:
      "USD Core Retail Sales release in 5 minutes. Expect high volatility.",
    time: "2m ago",
    unread: true,
  },
  {
    id: 2,
    type: "trade",
    title: "Trade Executed",
    message: "Long XAU/USD filled at 2341.50. Target set at 2355.00.",
    time: "15m ago",
    unread: true,
  },
  {
    id: 3,
    type: "alert",
    title: "Margin Warning",
    message: "Account margin level reached 80%. Review open positions.",
    time: "1h ago",
    unread: false,
  },
  {
    id: 4,
    type: "payout",
    title: "Payout Approved",
    message: "Your request for $2,500.00 has been processed successfully.",
    time: "5h ago",
    unread: false,
  },
];

const NotificationDropdown = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-40 bg-transparent" onClick={onClose} />

      <div className="fixed sm:absolute top-18 sm:top-full left-4 right-4 sm:left-auto sm:right-0 sm:mt-4 w-auto sm:w-95 max-h-[80vh] sm:max-h-125 bg-[#0a0a0a]/95 border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl z-50 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200 origin-top sm:origin-top-right">
        <div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/2">
          <h3 className="text-sm font-black text-white tracking-tight">
            Notifications
          </h3>
          <button
            onClick={onClose}
            className="text-[10px] font-bold text-emerald-400 hover:text-emerald-300 transition-colors uppercase tracking-widest"
          >
            Mark all read
          </button>
        </div>

        <div className="flex-1 overflow-y-auto hide-scrollbar">
          {notifications.length > 0 ? (
            notifications.map((n) => (
              <div
                key={n.id}
                className={`p-4 border-b border-white/5 last:border-0 hover:bg-white/3 transition-colors cursor-pointer group relative ${n.unread ? "bg-emerald-500/2" : ""}`}
              >
                {n.unread && (
                  <span className="absolute top-5 right-4 w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                )}

                <div className="flex gap-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${
                      n.type === "news"
                        ? "bg-blue-500/10 border-blue-500/20 text-blue-400"
                        : n.type === "trade"
                          ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                          : n.type === "alert"
                            ? "bg-yellow-500/10 border-yellow-500/20 text-yellow-400"
                            : "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                    }`}
                  >
                    {n.type === "news" && "📢"}
                    {n.type === "trade" && "🎯"}
                    {n.type === "alert" && "⚠️"}
                    {n.type === "payout" && "💰"}
                  </div>

                  <div className="flex-1 min-w-0 pr-2">
                    <p className="text-xs font-bold text-white mb-0.5">
                      {n.title}
                    </p>
                    <p className="text-[11px] text-gray-500 leading-relaxed line-clamp-2 font-medium">
                      {n.message}
                    </p>
                    <span className="text-[9px] text-gray-600 font-bold uppercase tracking-tighter mt-2 block">
                      {n.time}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="py-12 text-center">
              <p className="text-xs text-gray-600 font-bold uppercase tracking-widest">
                No notifications
              </p>
            </div>
          )}
        </div>

        <div className="p-3 border-t border-white/5 text-center bg-white/1">
          <button
            onClick={onClose}
            className="text-[10px] font-black text-gray-400 hover:text-white transition-colors uppercase tracking-widest"
          >
            View All Alerts
          </button>
        </div>
      </div>
    </>
  );
};

export default NotificationDropdown;
