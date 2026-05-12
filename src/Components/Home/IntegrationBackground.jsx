import React, { useRef, useMemo } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Your custom array of direct logo URLs
const nifty50Domainslogo = [
  "https://rilstaticasset.akamaized.net/sites/default/files/2023-02/S.1_2.jpg",
  "https://indiacsr.in/wp-content/uploads/2024/05/tcs-logo-india-csr-750x544.jpg",
  "https://companieslogo.com/img/orig/HDB-bb6241fe.png?t=1720244492",
  "https://i.pinimg.com/736x/ff/d5/31/ffd531a6a78464512a97848e14506738.jpg",
  "https://static.vecteezy.com/system/resources/previews/020/336/451/non_2x/infosys-logo-infosys-icon-free-free-vector.jpg",
  "https://thebranvetica.com/assets/img/SBI_Logo.webp",
  "https://www.chittorgarh.net/images/ipo/bharti-airtel-logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/ITC_Limited_Logo.svg/1280px-ITC_Limited_Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
  "https://img.etimg.com/thumb/msid-63281145,width-640,height-480,imgsize-11382,resizemode-4/logo.jpg",
  "https://indidesign.in/wp-content/uploads/2019/07/Bajaj_Indi-website-work-01-2.jpg",
  "https://assets.upstox.com/content/assets/images/logos/NSE_EQ%7CINE155A01022.png",
  "https://crystalpng.com/wp-content/uploads/2025/08/Maruti-Suzuki-Logo-png.png",
  "https://mechanical.co.in/wp-content/uploads/2024/07/sun-pharma-logo-768x452.webp",
  "https://logowik.com/content/uploads/images/mahindra-auto-with-wordmark7167.logowik.com.webp",
  "https://images.squarespace-cdn.com/content/v1/66e806e6c1862d4e0dcade8e/971637bb-f0e5-4e23-9d03-6c990eff7bab/Elephant+Design_Axis+Bank_Axis+Bank_Retail+Design+_Financial+Services+%26+Fintech_in-branch+%26+retail+banking+experience_3.PNG",
  "https://companieslogo.com/img/orig/KOTAKBANK.NS-36440c5e.png?t=1720244492",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL2a418p8twUZDZKHOggy9fkZSrnxyUZw6Bg&s",
  "https://download.logo.wine/logo/HCL_Technologies/HCL_Technologies-Logo.wine.png",
  "https://3.bp.blogspot.com/-NBvFXfmip_s/XKrDY5YYPyI/AAAAAAAACf0/IVjmdqwDXhIC38pF_xqa60_yD1BUCedxwCLcBGAs/w800/lowongan-kerja-pt-asian-paints-indonesia.jpg",
  "https://crystalpng.com/wp-content/uploads/2025/03/nestle_logo.png",
  "https://i.pinimg.com/736x/d3/ca/44/d3ca44ad81a24fcbe71b4e2d78e8d41b.jpg",
  "https://s3-symbol-logo.tradingview.com/adani--600.png",
  "https://pbs.twimg.com/profile_images/1087668345309081601/TgLGHi9__400x400.jpg",
  "https://www.industrytransition.org/wp-content/uploads/2026/01/tata-steel-vector-logo-1-1.png",
];

const IntegrationBackground = () => {
  const containerRef = useRef(null);

  const floatingNodes = useMemo(() => {
    return Array.from({ length: 48 }).map((_, i) => ({
      id: i,
      url: nifty50Domainslogo[i % nifty50Domainslogo.length],
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
