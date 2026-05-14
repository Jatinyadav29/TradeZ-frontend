import React from "react";

const HallOfFame = ({ leaderboard }) => {
  const top3 = leaderboard.slice(0, 3);
  const podiumOrder = top3.length === 3 ? [top3[1], top3[0], top3[2]] : top3;
  const runnersUp = leaderboard.slice(3);

  return (
    <div className="h-full bg-[#0a0a0a] border border-white/5 rounded-2xl sm:rounded-[2rem] p-5 sm:p-6 shadow-2xl flex flex-col">
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
          Hall of Fame
        </h3>
        <span className="bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-2 py-0.5 rounded text-[10px] font-bold uppercase flex items-center gap-1.5 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          Live
        </span>
      </div>

      <div className="flex items-end justify-center gap-1.5 sm:gap-3 lg:gap-4 h-48 sm:h-56 mb-6 sm:mb-8 border-b border-white/5 pb-0">
        {podiumOrder.map((user) => {
          if (!user) return null;
          const isFirst = user.rank === 1;
          const isSecond = user.rank === 2;

          const heightClass = isFirst
            ? "h-28 sm:h-36"
            : isSecond
              ? "h-20 sm:h-28"
              : "h-16 sm:h-20";

          const gradientClass = isFirst
            ? "from-yellow-500/20 to-transparent border-yellow-500/50"
            : isSecond
              ? "from-gray-300/20 to-transparent border-gray-300/50"
              : "from-orange-700/20 to-transparent border-orange-700/50";

          const borderClass = isFirst
            ? "border-yellow-500"
            : isSecond
              ? "border-gray-300"
              : "border-orange-700";

          return (
            <div
              key={user.name}
              className="flex flex-col items-center flex-1 relative group w-1/3"
            >
              {isFirst && (
                <div className="absolute -top-10 sm:-top-14 text-xl sm:text-3xl drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]">
                  👑
                </div>
              )}

              <img
                src={user.avatar}
                className={`rounded-full border-2 mb-2 sm:mb-3 shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10 bg-[#050505] transition-transform group-hover:scale-110 object-cover ${
                  isFirst
                    ? "w-10 h-10 sm:w-14 sm:h-14 " + borderClass
                    : "w-8 h-8 sm:w-10 sm:h-10 " + borderClass
                }`}
                alt={user.name}
              />

              <div
                className={`w-full ${heightClass} bg-linear-to-t ${gradientClass} rounded-t-xl border-t border-x flex flex-col items-center pt-2 sm:pt-3 relative overflow-hidden`}
              >
                <span className="text-white font-bold text-[10px] sm:text-sm z-10 truncate w-full text-center px-1">
                  {user.name}
                </span>
                <span className="text-emerald-400 font-black text-[9px] sm:text-xs z-10 tracking-tight">
                  {user.roi}
                </span>

                <span className="absolute -bottom-2 sm:-bottom-4 text-5xl sm:text-[80px] font-black text-white/3 leading-none select-none">
                  {user.rank}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex-1 flex flex-col gap-1.5 sm:gap-2">
        {runnersUp.map((user) => (
          <div
            key={user.name}
            className="flex items-center justify-between p-2 sm:p-2.5 rounded-xl hover:bg-white/2 transition-colors group cursor-default"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-gray-600 font-black font-mono text-[10px] sm:text-xs w-4">
                {user.rank}
              </span>
              <img
                src={user.avatar}
                className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-white/10 object-cover"
                alt={user.name}
              />
              <p className="text-[10px] sm:text-xs font-bold text-gray-300 group-hover:text-white transition-colors">
                {user.name}
              </p>
            </div>
            <p className="text-[10px] sm:text-xs font-black text-emerald-400 tracking-tight group-hover:scale-105 transition-transform">
              {user.roi}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HallOfFame;
