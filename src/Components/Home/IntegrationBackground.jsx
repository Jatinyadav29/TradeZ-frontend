import React, { useRef, useMemo } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Your custom array of direct logo URLs
const forexInfrastructureLogos = [
  "https://fxscouts.com/wp-content/uploads/sites/20/2024/08/mt4-sign.png",
  "https://www.trusted-broker-reviews.com/wp-content/uploads/ctrader-logo-1.webp",
  "https://orbitglobalfx.com/assets/images/metatrader5-logo.png",
  "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/tradingview-ax7sxe5lm8knfaxwcaldi.png/tradingview-nct7p51k07roxa6picopf.png?_a=DATAiZAAZAA0",
  "https://e7.pngegg.com/pngimages/727/671/png-clipart-bloomberg-round-logo-icons-logos-emojis-iconic-brands-thumbnail.png",
  "https://www.pngall.com/wp-content/uploads/15/JP-Morgan-Logo-PNG-Cutout.png",
  "https://www.vhv.rs/dpng/d/504-5049178_goldman-sachs-logo-goldman-sachs-logo-svg-hd.png",
  "https://www.clipartmax.com/png/middle/249-2497862_hsbc-logo-hsbc-logo-png.png",
  "Barclays",
  "https://upload.wikimedia.org/wikipedia/commons/3/34/UBS_Logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  "https://download.logo.wine/logo/Equinix/Equinix-Logo.wine.png",
  "https://img.fazzaco.com/static/brokers/logo/logo11/Beeks_Financial_Cloud.png",
  "https://ftmo-frontend-prod.storage.googleapis.com/wp-content/uploads/2026/02/16162427/FTMO-Icon-2025-light.png",
  "https://i0.wp.com/proptraders.club/wp-content/uploads/2022/11/myfundedfx-logo.png?resize=500%2C500&ssl=1",
];

const IntegrationBackground = () => {
  const containerRef = useRef(null);

  const floatingNodes = useMemo(() => {
    return Array.from({ length: 48 }).map((_, i) => ({
      id: i,
      url: forexInfrastructureLogos[i % forexInfrastructureLogos.length],
      startX: Math.floor(Math.random() * 90) + 5,
      startY: Math.floor(Math.random() * 90) + 5,
      scale: Math.random() * 0.4 + 0.8,
    }));
  }, []);

  useGSAP(
    () => {
      const nodes = gsap.utils.toArray(".floating-logo");

      nodes.forEach((node) => {
        const drift = () => {
          gsap.to(node, {
            x: `+=${gsap.utils.random(-200, 200)}`,
            y: `+=${gsap.utils.random(-200, 200)}`,
            rotation: `+=${gsap.utils.random(-15, 15)}`,
            duration: gsap.utils.random(15, 30),
            ease: "sine.inOut",
            onComplete: drift,
          });
        };

        drift();
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#050505] mask-[radial-gradient(ellipse_at_center,black_30%,transparent_80%)]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[40px_40px]"></div>

      {floatingNodes.map((node) => (
        <div
          key={node.id}
          className="floating-logo absolute flex items-center justify-center will-change-transform"
          style={{
            left: `${node.startX}%`,
            top: `${node.startY}%`,
            transform: `scale(${node.scale})`,
          }}
        >
          <img
            src={node.url}
            alt="Brand Logo"
            className="w-10 h-10 md:w-14 md:h-14 object-contain"
            onError={(e) => (e.target.style.display = "none")}
          />
        </div>
      ))}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-emerald-900/20 rounded-full blur-[120px]"></div>
    </div>
  );
};

export default IntegrationBackground;
