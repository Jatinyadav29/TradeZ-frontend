import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const pricingPlans = [
  {
    name: "Starter",
    price: "$0",
    period: "/month",
    desc: "Perfect for beginners testing the waters with manual journaling and basic analytics.",
    features: [
      "Up to 50 trades per month",
      "Manual trade entry",
      "Basic P&L analytics",
      "Community lounge access",
    ],
    buttonText: "Start Free",
    isPopular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    desc: "For serious traders who need automated syncing, AI insights, and deep analytics.",
    features: [
      "Unlimited automated trades",
      "MT4/MT5 & Binance sync",
      "Advanced AI trade reports",
      "Asset & session filtering",
      "Zero-lag live data feed",
    ],
    buttonText: "Start 14-Day Trial",
    isPopular: true,
  },
  {
    name: "Elite",
    price: "$99",
    period: "/month",
    desc: "Built for funded prop traders requiring VPS speed, API access, and strict risk tools.",
    features: [
      "Everything in Pro",
      "Equinix NY4 VPS Colocation",
      "Drawdown limit alerts",
      "Custom API access",
      "Priority 24/7 support",
    ],
    buttonText: "Go Elite",
    isPopular: false,
  },
];

const PricingSection = () => {
  const sectionRef = useRef(null);
  const [isYearly, setIsYearly] = useState(true);

  useGSAP(
    () => {
      gsap.fromTo(
        ".pricing-header",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );

      gsap.fromTo(
        ".pricing-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".pricing-grid",
            start: "top 85%",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="relative w-full py-24 px-4 sm:px-6 md:px-8 lg:px-16 z-20 bg-[#050505] overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-200 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-emerald-600/30 via-[#050505] to-[#050505] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none mask-[radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <div className="pricing-header inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></span>
            <span className="text-[10px] font-bold text-emerald-400 tracking-widest uppercase">
              Transparent Pricing
            </span>
          </div>

          <h2 className="pricing-header text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Plans for Every Trader
          </h2>

          <p className="pricing-header text-gray-400 max-w-2xl text-base md:text-lg leading-relaxed mb-10">
            Whether you are just starting out or managing a 7-figure funded
            account, we have a plan built for your exact needs.
          </p>

          <div className="pricing-header flex items-center bg-[#111] border border-white/10 rounded-full p-1 shadow-lg">
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                isYearly
                  ? "bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Yearly{" "}
              <span className="ml-1 text-[10px] uppercase tracking-wider opacity-80">
                (Save 20%)
              </span>
            </button>
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                !isYearly
                  ? "bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
          </div>
        </div>

        <div className="pricing-grid grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card relative group rounded-[2rem] flex flex-col p-8 transition-all duration-500 ${
                plan.isPopular
                  ? "bg-[#0a0a0a] border-2 border-emerald-500 shadow-[0_0_40px_rgba(16,185,129,0.2)] md:-translate-y-4"
                  : "bg-[#111] border border-white/5 hover:border-emerald-500/30 hover:bg-[#141414]"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-center text-black px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed h-10">
                  {plan.desc}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold text-white">
                    {plan.price === "$0"
                      ? "$0"
                      : isYearly
                        ? `$${Math.round(parseInt(plan.price.replace("$", "")) * 0.8)}`
                        : plan.price}
                  </span>
                  <span className="text-gray-500 font-medium">
                    {plan.period}
                  </span>
                </div>
                {isYearly && plan.price !== "$0" && (
                  <p className="text-emerald-400 text-xs mt-2 font-medium">
                    Billed annually
                  </p>
                )}
              </div>

              <ul className="grow space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-gray-300"
                  >
                    <svg
                      className={`w-5 h-5 shrink-0 mt-0.5 ${plan.isPopular ? "text-emerald-500" : "text-emerald-500/60"}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                  plan.isPopular
                    ? "bg-emerald-500 text-black hover:bg-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]"
                    : "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
