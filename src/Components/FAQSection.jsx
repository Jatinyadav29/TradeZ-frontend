import React, { useState } from "react";

const faqs = [
  {
    question: "What exactly is TradeZ?",
    answer:
      "TradeZ is a professional-grade trading journal and analytics platform engineered specifically for global scalpers and prop firm traders. We support Forex, Crypto, and US Indices.",
  },
  {
    question: "How does the MT4/MT5 sync work?",
    answer:
      "We utilize read-only API connections and host our data sync engines on Equinix NY4/LD4 servers. This allows us to pull your live trades instantly with zero latency.",
  },
  {
    question: "Are my trading strategies and data secure?",
    answer:
      "Absolutely. We use bank-level 256-bit encryption. We only request read-only access to your accounts, meaning we cannot execute trades or move funds. Your edge remains strictly yours.",
  },
  {
    question: "Do you support prop firm accounts?",
    answer:
      "Yes. TradeZ is heavily optimized for funded traders. You can set specific daily drawdown limits and max loss rules to ensure you never violate your prop firm's terms of service.",
  },
  {
    question: "Can I share my performance with others?",
    answer:
      "Yes, you can generate verified public URLs, create custom leaderboard share cards for Twitter/Discord, or securely share your setups with mentors in the Traders Lounge.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Every new user automatically receives a 14-day free trial of our Pro plan. No credit card is required to start syncing your accounts and backtesting strategies.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const FAQItem = ({ faq, index }) => {
    const isOpen = openIndex === index;

    return (
      <div
        className={`group relative w-full border-b transition-colors duration-300 ${
          isOpen
            ? "border-emerald-500/50"
            : "border-white/10 hover:border-white/30"
        }`}
      >
        <button
          onClick={() => toggleFAQ(index)}
          className="w-full flex items-center justify-between py-6 text-left outline-none"
        >
          <h3
            className={`text-lg md:text-xl font-medium pr-4 transition-colors duration-300 ${
              isOpen
                ? "text-emerald-400"
                : "text-white group-hover:text-gray-200"
            }`}
          >
            {faq.question}
          </h3>

          <div
            className={`flex shrink-0 items-center justify-center transition-all duration-500 ease-in-out ${
              isOpen
                ? "text-emerald-400 rotate-180"
                : "text-gray-500 group-hover:text-white"
            }`}
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
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </button>

        <div
          className={`grid transition-all duration-400 ease-in-out ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="pb-6 pr-8 text-gray-400 text-sm md:text-base leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="faq"
      className="relative w-full py-24 px-4 sm:px-6 md:px-8 z-20 bg-[#050505] overflow-hidden border-t border-white/5"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-125 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent pointer-events-none blur-3xl"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></span>
            <span className="text-[10px] font-bold text-emerald-400 tracking-widest uppercase">
              Support
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Frequently Asked <br className="hidden md:block" />
            <span className="text-gray-500">Questions.</span>
          </h2>
        </div>

        <div className="flex flex-col w-full">
          <div className="w-full border-t border-white/10"></div>

          {faqs.map((faq, idx) => (
            <FAQItem key={`faq-${idx}`} faq={faq} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
