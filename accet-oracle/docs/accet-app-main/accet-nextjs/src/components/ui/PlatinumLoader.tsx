import React from "react";
import { motion } from "framer-motion";

export const PlatinumLoader = ({ fullScreen = false }: { fullScreen?: boolean }) => {
  const containerClass = fullScreen
    ? "fixed inset-0 z-50 flex items-center justify-center bg-[#050A14]/90 backdrop-blur-xl"
    : "w-full h-full min-h-[400px] flex items-center justify-center";

  return (
    <div className={containerClass}>
      <div className="relative flex flex-col items-center gap-6">
        {/* Platinum Rings Animation */}
        <div className="relative size-24 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            className="absolute inset-0 rounded-full border-[3px] border-t-primary border-r-transparent border-b-teal border-l-transparent"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute inset-2 rounded-full border-[2px] border-l-sky border-t-transparent border-r-white/20 border-b-transparent"
          />
          <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-primary/20 to-teal/20 backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(94,200,242,0.3)]">
            <span className="material-symbols-outlined text-white text-3xl">token</span>
          </div>
        </div>

        {/* Text Shimmer Effect */}
        <div className="overflow-hidden relative">
          <motion.p 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="font-syne font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-white to-slate-400 uppercase tracking-[4px] text-xs"
          >
            Sincronizando
          </motion.p>
        </div>
      </div>
    </div>
  );
};
