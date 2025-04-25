"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function BannerTres() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="h-[400px] md:h-[600px] bg-center bg-cover flex items-center justify-center text-white text-center px-4 relative"
      style={{
        backgroundImage: `url(${isMobile ? "/banner2.png" : "/banner.png"})`,
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="z-10">
        <motion.h1
          className="text-3xl md:text-6xl font-light"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Big Summer <span className="font-semibold">Sale</span>
        </motion.h1>

        <motion.p
          className="text-sm md:text-base text-gray-300 mt-2 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Commodo fames vitae vitae leo mauris in. Eu consequat.
        </motion.p>

        <motion.button
          className="border border-white text-white font-semibold px-6 py-2 rounded-2xl hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Shop Now
        </motion.button>
      </div>
    </div>
  );
}
