import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const communityFeatures = [
  {
    id: "lounge",
    title: "Traders Lounge",
    desc: "Step into the Traders Lounge — where top prop traders from around the world share market updates, trade ideas, and insights to help you grow. Learn from the best in real-time.",
    points: [
      "Market updates from verified funded traders",
      "Real-time chat, reactions, and charting",
      "Dedicated channels for Forex, Crypto, and Indices",
    ],
    icon: (
      <svg
        className="w-6 h-6 text-emerald-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    image:
      "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "leaderboard",
    title: "Global Leaderboard",
    desc: "See where you rank among the international trading community. Generate professional share cards for social media to show off your stats, or share read-only access to your journal.",
    points: [
      "Daily, weekly & monthly global rankings",
      "Custom share cards for Twitter & Discord",
      "Friend requests & direct messaging",
    ],
    icon: (
      <svg
        className="w-6 h-6 text-emerald-400"
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
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "signals",
    title: "Verified Signals",
    desc: "Follow top-performing traders and receive instant notifications when they execute a trade. Analyze their entry, exit, and exact risk-to-reward ratio on your own charts.",
    points: [
      "Copy-trade alerts directly to your phone",
      "100% verified P&L tracking",
      "Detailed breakdown of mentors' strategies",
    ],
    icon: (
      <svg
        className="w-6 h-6 text-emerald-400"
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
    ),
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
];

const CommunitySection = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: ".community-wrapper",
          start: "top 15%",
          end: "bottom bottom",
          pin: ".left-pin-column",
          pinSpacing: false,
        });

        const blocks = gsap.utils.toArray(".right-text-block");
        const images = gsap.utils.toArray(".left-image-layer");

        gsap.set(images, { opacity: 0 });
        gsap.set(images[0], { opacity: 1 });

        blocks.forEach((block, index) => {
          const components = block.querySelectorAll(".slide-anim");
          gsap.set(components, { opacity: 0.3, y: 15 });

          ScrollTrigger.create({
            trigger: block,
            start: "top 55%",
            end: "bottom 45%",
            onToggle: (self) => {
              if (self.isActive) {
                gsap.to(images, {
                  opacity: 0,
                  duration: 0.5,
                  ease: "power2.inOut",
                });
                gsap.to(images[index], {
                  opacity: 1,
                  duration: 0.5,
                  ease: "power2.inOut",
                });
                gsap.to(components, {
                  opacity: 1,
                  y: 0,
                  duration: 0.4,
                  stagger: 0.1,
                  ease: "power2.out",
                });
              } else {
                gsap.to(components, {
                  opacity: 0.3,
                  y: 15,
                  duration: 0.4,
                  ease: "power2.inOut",
                });
              }
            },
          });
        });
      });

      mm.add("(max-width: 1023px)", () => {
        const mobileBlocks = gsap.utils.toArray(".mobile-block");

        mobileBlocks.forEach((block) => {
          const components = block.querySelectorAll(".slide-anim");

          gsap.fromTo(
            components,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: block,
                start: "top 80%",
              },
            },
          );
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 z-20 bg-[#050505] overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24 lg:mb-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></span>
            <span className="text-[10px] font-bold text-emerald-400 tracking-widest uppercase">
              Community
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Trade Together,
            <br className="hidden md:block" />
            <span className="text-gray-500">Grow Together.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-base md:text-lg">
            Trading doesn't have to be lonely. Connect with thousands of
            international prop traders, share setups, and see how your metrics
            stack up against the best.
          </p>
        </div>

        <div className="community-wrapper hidden lg:flex items-start gap-16 relative w-full pb-[10vh]">
          <div className="left-pin-column w-[55%] h-[75vh] flex flex-col justify-center">
            <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(16,185,129,0.1)] bg-[#0a0a0a] flex flex-col">
              <div className="w-full h-10 bg-[#111] border-b border-white/5 flex items-center px-4 gap-2 z-20">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              </div>
              <div className="relative grow w-full">
                {communityFeatures.map((feature, index) => (
                  <img
                    key={`img-${index}`}
                    src={feature.image}
                    alt={feature.title}
                    className="left-image-layer absolute inset-0 w-full h-full object-cover opacity-80"
                  />
                ))}
                <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90 z-10"></div>
              </div>
            </div>
          </div>

          <div className="w-[45%] flex flex-col pt-[20vh] pb-[30vh]">
            {communityFeatures.map((feature, index) => (
              <div
                key={`text-${index}`}
                className="right-text-block group min-h-[60vh] flex flex-col justify-center pr-8"
              >
                <div className="slide-anim w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(16,185,129,0.15)] group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all duration-500">
                  {feature.icon}
                </div>
                <h3 className="slide-anim text-3xl xl:text-4xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="slide-anim text-gray-400 text-lg leading-relaxed mb-8">
                  {feature.desc}
                </p>
                <ul className="slide-anim space-y-4">
                  {feature.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-4 text-gray-300 font-medium text-base hover:translate-x-2 transition-transform duration-300 cursor-default"
                    >
                      <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                        <svg
                          className="w-3.5 h-3.5 text-emerald-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:hidden flex flex-col gap-20 w-full">
          {communityFeatures.map((feature, index) => (
            <div
              key={`mob-${index}`}
              className="mobile-block group flex flex-col gap-8"
            >
              <div className="slide-anim relative w-full aspect-4/3 sm:aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(16,185,129,0.1)] bg-[#0a0a0a] flex flex-col">
                <div className="w-full h-8 bg-[#111] border-b border-white/5 flex items-center px-3 gap-1.5 z-20">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="relative grow">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90 z-10"></div>
                </div>
              </div>

              <div className="flex flex-col px-2 sm:px-4">
                <div className="slide-anim w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:scale-105 transition-transform duration-500">
                  {feature.icon}
                </div>
                <h3 className="slide-anim text-2xl sm:text-3xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="slide-anim text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
                  {feature.desc}
                </p>
                <ul className="slide-anim space-y-4">
                  {feature.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 text-sm sm:text-base text-gray-300 hover:translate-x-1.5 transition-transform duration-300"
                    >
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                        <svg
                          className="w-3 h-3 text-emerald-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="leading-tight">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
