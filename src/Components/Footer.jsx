import React from "react";

const footerLinks = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Integrations", "Changelog"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Tutorials", "Blog", "Support"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Contact", "Partners"],
  },
];

const Footer = () => {
  return (
    <footer className="relative w-full px-4 sm:px-6 md:px-8 py-8 z-20 bg-[#050505] overflow-hidden">
      <div className="relative max-w-7xl mx-auto rounded-[2rem] bg-linear-to-b from-[#0a0a0a] via-[#050505] to-[#011c14] border border-white/5 border-t-white/10 overflow-hidden p-8 md:p-12 lg:p-16 shadow-2xl shadow-emerald-900/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[32px_32px] mask-[radial-gradient(ellipse_80%_80%_at_50%_100%,#000_20%,transparent_100%)] pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-150 bg-[radial-gradient(ellipse_at_bottom,var(--tw-gradient-stops))] from-emerald-500/10 via-emerald-900/20 to-transparent pointer-events-none blur-3xl"></div>

        <div className="relative z-10 flex flex-col lg:flex-row justify-between gap-16 lg:gap-24 mb-16 md:mb-24">
          <div className="flex flex-col max-w-sm">
            <a href="#" className="inline-block mb-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Trade<span className="text-emerald-500">Z</span>
              </h2>
            </a>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
              TradeZ empowers global scalpers to transform raw trade data into
              clear, compelling insights — making edge discovery easier to
              share, understand, and act on.
            </p>

            <div className="flex items-center gap-5">
              <a
                href="#"
                className="text-gray-500 hover:text-emerald-400 transition-colors duration-300 hover:-translate-y-1 transform"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-emerald-400 transition-colors duration-300 hover:-translate-y-1 transform"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-emerald-400 transition-colors duration-300 hover:-translate-y-1 transform"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-12 sm:gap-16 lg:gap-24">
            {footerLinks.map((column, idx) => (
              <div key={idx} className="flex flex-col">
                <h4 className="text-white font-bold mb-6 tracking-wide text-sm md:text-base">
                  {column.title}
                </h4>
                <ul className="flex flex-col gap-4">
                  {column.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-emerald-400 text-sm md:text-base transition-colors duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
          <p className="text-gray-500 text-xs md:text-sm text-center md:text-left">
            © 2026 TradeZ. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a
              href="#"
              className="text-gray-500 hover:text-white text-xs md:text-sm transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white text-xs md:text-sm transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white text-xs md:text-sm transition-colors duration-300"
            >
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
